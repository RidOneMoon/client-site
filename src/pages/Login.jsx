import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import LogingPageStyle from "../components/login/Style";

export default function Login() {
  const { login, signInWithGoogle, user } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "PawMart — Login";
    if (user) {
      console.log("User logged in, navigating to /");
    }
  }, [user]);

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(form.email, form.password);
      toast.success("Logged in");
      nav("/");
    } catch (err) {
      toast.error(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Logged in with Google");
      nav("/");
    } catch (err) {
      toast.error("Google Sign-in failed", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>

      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>
          
          <form onSubmit={submit} className="input-group">
            <input 
              value={form.email} 
              onChange={e => setForm({...form, email: e.target.value})} 
              className="login-input" 
              placeholder="Email Address" 
              type="email"
              required
            />
            <input 
              type="password" 
              value={form.password} 
              onChange={e => setForm({...form, password: e.target.value})} 
              className="login-input" 
              placeholder="Password" 
              required
            />
            <button 
              className={`login-btn primary-btn ${isLoading ? 'disabled-btn' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Login"}
            </button>
          </form>

          <div className="input-group">
            <button 
              className={`login-btn google-btn ${isLoading ? 'disabled-btn' : ''}`}
              onClick={handleGoogle}
              disabled={isLoading}
            >
              <i className="fas fa-google" style={{ marginRight: '8px' }}></i> Login with Google
            </button>
          </div>

          <div className="register-link">
            <span>Don't have an account? </span>
            <Link to="/register">Register here</Link>
          </div>
        </div>
      </div>

      <LogingPageStyle />
    </>
  );
}