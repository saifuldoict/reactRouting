import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-accent hover:text-primary transition"
        >
          Logo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-accent font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-primary transition-colors duration-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:text-primary transition-colors duration-200"
            >
              Register
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-accent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col items-center gap-4 py-5 text-accent font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-primary transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-primary transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="hover:text-primary transition"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar