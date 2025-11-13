import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import RegisterPageStyle from "../components/register/Style";

export default function Register() {
  const { register, user } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", photoURL: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "PawMart — Register";

    if (user) {
      console.log("User logged in, navigating to /");
      // nav("/"); 
    }
  }, [user]);

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!/[A-Z]/.test(form.password) || !/[a-z]/.test(form.password) || form.password.length < 6) {
      toast.error("Password must have uppercase, lowercase, and min 6 characters");
      setIsLoading(false);
      return;
    }
    
    try {
      await register(form);
      toast.success("Account created");
      nav("/");
    } catch (err) {
      toast.error(err.message || "Register failed");
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">Create Account</h2>
          
          <form onSubmit={submit} className="input-group">
            <input 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
              className="register-input" 
              placeholder="Full Name" 
              required
            />
            <input 
              value={form.email} 
              onChange={e => setForm({...form, email: e.target.value})} 
              className="register-input" 
              placeholder="Email Address" 
              type="email"
              required
            />
            <div>
                <input 
                type="password" 
                value={form.password} 
                onChange={e => setForm({...form, password: e.target.value})} 
                className="register-input" 
                placeholder="Password" 
                required
                />
                
            </div>
            
            <input 
              value={form.photoURL} 
              onChange={e => setForm({...form, photoURL: e.target.value})} 
              className="register-input" 
              placeholder="Photo URL (optional)" 
              type="url"
            />
            
            <button 
              className={`register-btn ${isLoading ? 'disabled-btn' : ''}`}
              disabled={isLoading}
              style={{
                padding:"3px 2px"
              }}
            >
              {isLoading ? "Creating Account..." : "Register"}
            </button>
          </form>

          <div className="login-link">
            <span>Already have an account? </span>
            <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>

      <RegisterPageStyle />
    </>
  );
}