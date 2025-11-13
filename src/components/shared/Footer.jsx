import React from "react";
import { Link } from "react-router-dom";
import Style from "../footer/Style";
import img from "..//../assets/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          {/* Logo / Short Description */}
          <div className="footer-section">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-white t">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={img}
                  alt="PawMart Logo"
                  className="h-[40px] w-[80px] object-cover"
                />
                <span>PawMart</span>
              </Link>
            </h4>
            <p className="text-gray-300 mt-2 text-sm">
              PawMart connects local pet owners and buyers for adoption and pet
              care products.
            </p>
          </div>

          {/* Useful Links */}
          <div className="footer-section footer-links">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <Link to="/" className="hover:text-green-400 transition">
              Home
            </Link>
            <Link
              to="/pets-and-supplies"
              className="hover:text-green-400 transition"
            >
              Pets & Supplies
            </Link>
            <Link to="/contact" className="hover:text-green-400 transition">
              Contact
            </Link>
            <Link to="/terms" className="hover:text-green-400 transition">
              Terms & Conditions
            </Link>
          </div>

          {/* Social Section */}
          <div className="footer-section">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <p className="text-gray-300 text-sm">
              Stay up to date with our furry community!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom text-center text-gray-400 text-sm mt-6">
          &copy; {new Date().getFullYear()} PawMart — All rights reserved
        </div>
      </footer>

      <Style />
    </>
  );
}
