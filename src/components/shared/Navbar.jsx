import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import img from "..//../assets/logo.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out");
      setMobileMenuOpen(false);
    } catch (err) {
      toast.error("Logout failed");
      console.error(err);
    }
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className=" w-[80%] mx-auto ">
      <div className=" w-full flex items-center justify-between h-[60px] px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={img} alt="logo" className="w-20 sm:w-20" />
          <span className="font-bold text-xl text-primary hidden sm:inline">PawMart</span>
        </NavLink>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/pets-and-supplies" className="small">Pets & Supplies</NavLink>
          {user && (
            <>
              <NavLink to="/add-listing" className="small">Add Listing</NavLink>
              <NavLink to="/my-listings" className="small">My Listings</NavLink>
              <NavLink to="/my-orders" className="small">My Orders</NavLink>
            </>
          )}
        </nav>

        {/* Auth / User Actions */}
        <div className="hidden md:flex items-center gap-2">
          {!user ? (
            <>
              {/* Login Link: Clean, border-focused style */}
      <Link
        to="/login"
        className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full 
                   shadow-sm transition-all duration-300 
                   hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md"
      >
        Login
      </Link>

      {/* Register Button: High-contrast, prominent Call-to-Action with strong visual hierarchy */}
      <Link
        to="/register"
        className="px-6 py-2 text-sm font-bold text-white bg-green-500 rounded-full 
                   shadow-xl transition-all duration-300 transform 
                   hover:bg-green-600 hover:shadow-2xl hover:scale-105"
      >
        Register
      </Link>

            </>
          ) : (
            <>
              <img
                src={user.photoURL || "/favicon.ico"}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="small">{user.displayName || user.email}</span>
              <button  onClick={handleLogout}
              style={{
                padding: "3px 2px"
              }}
              >Logout</button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col gap-3">
          <NavLink to="/pets-and-supplies" onClick={toggleMobileMenu}>Pets & Supplies</NavLink>
          {user && (
            <>
              <NavLink to="/add-listing" onClick={toggleMobileMenu}>Add Listing</NavLink>
              <NavLink to="/my-listings" onClick={toggleMobileMenu}>My Listings</NavLink>
              <NavLink to="/my-orders" onClick={toggleMobileMenu}>My Orders</NavLink>
            </>
          )}
          {!user ? (
            <>
              <Link to="/login" className="small" onClick={toggleMobileMenu}>Login</Link>
              <Link to="/register" className="btn" onClick={toggleMobileMenu}>Register</Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL || "/favicon.ico"}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="small">{user.displayName || user.email}</span>
              </div>
              <button className="btn w-full mt-2" onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
