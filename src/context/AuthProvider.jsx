import {  useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";
import AuthContext from "./AuthContext";


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoadingAuth(false);
    });
    return unsub;
  }, []);

  const register = async ({ name, email, password, photoURL }) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (name || photoURL) {
      await updateProfile(res.user, { displayName: name, photoURL });
    }
    return res;
  };

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);

  const value = { user, register, login, signInWithGoogle, logout, loadingAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
