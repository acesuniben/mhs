import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function PageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 bg-white ">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="h-8 md:h-10" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        <NavLink to="/ACES-MHS/" className="font-semibold text-gray-700 hover:text-gray-900">
          Home
        </NavLink>
        <NavLink to="/ACES-MHS/" className="text-gray-600 hover:text-gray-900">
          About
        </NavLink>
        <NavLink to="/ACES-MHS/" className="text-gray-600 hover:text-gray-900">
          Contact Us
        </NavLink>
      </div>

      {/* Download Buttons (hide when menu is open) */}
      {!isMenuOpen && (
        <div className="flex space-x-4">
          {/* Android Download Button */}
          <NavLink
            to="/mhs/download"
            className="flex items-center bg-white text-green-700 px-4 py-2 rounded-md hover:border-green-950 hover:border-2 transition-all"
          >
            <img src="https://cdn.worldvectorlogo.com/logos/android-logomark.svg" alt="Android" className="h-5 w-5 mr-2" />
            Android
          </NavLink>

          {/* iOS Coming Soon Button */}
          <button
            className="flex items-center bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed"
            title="iOS version coming soon!"
          >
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-ios-apple-logo-icon-download-in-svg-png-gif-file-formats--operating-system-browser-and-pack-logos-icons-572947.png?f=webp&w=256" alt="iOS" className="h-5 w-5 mr-2" />
            iOS (Coming Soon)
          </button>
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-5 md:hidden flex flex-col space-y-4 text-center">
          <NavLink to="/ACES-MHS/" className="font-semibold text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/ACES-MHS/" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/ACES-MHS/" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default PageNav;
