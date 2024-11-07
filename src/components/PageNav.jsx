import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

function PageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="h-8 md:h-10" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        <NavLink to="/mhs/" className="font-medium text-gray-700 hover:text-gray-900">
          Home
        </NavLink>
        <NavLink to="/mhs/" className="text-gray-600 hover:text-gray-900">
          About
        </NavLink>
        <NavLink to="/mhs/" className="text-gray-600 hover:text-gray-900">
          Contact Us
        </NavLink>
        {/* Download Buttons */}
        <a
          href="/mhs/download"
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Android
        </a>
        <button
          className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-md cursor-not-allowed"
          title="iOS version coming soon!"
        >
          iOS (Coming Soon)
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden flex flex-col space-y-4 text-center">
          <NavLink
            to="/mhs/"
            className="font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/mhs/"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/mhs/"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <div className="flex flex-col space-y-2">
            <a
              href="/mhs/download"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Android
            </a>
            <button
              className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-md cursor-not-allowed"
              title="iOS version coming soon!"
            >
              iOS (Coming Soon)
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default PageNav;