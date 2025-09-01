import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

// Navbar links constant
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Groups", path: "/groups" },
  { name: "Activities", path: "/activities" },
  { name: "FAQs", path: "/faqs" },
];

const FACEBOOK_URL = "https://www.facebook.com/dundalkpresbyterianchurch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-[#FDFDFD] sticky top-0 z-50">
      {/* Logo / Church Name */}
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-bold text-[#2A5D84]">
          Dundalk Presbyterian Church
        </h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-[#4B5563] font-medium">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="hover:text-[#2A5D84] transition">
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2A5D84] transition"
          >
            <FaFacebookF size={20} />
          </a>
        </li>
      </ul>

      {/* Hamburger for Mobile */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#4B5563]">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FDFDFD] shadow-md md:hidden">
          <ul className="flex flex-col px-6 py-4 space-y-3 text-[#4B5563] font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#2A5D84] transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Facebook icon at bottom */}
            <li className="pt-4 border-t border-gray-200">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#4B5563] hover:text-[#2A5D84] transition"
              >
                <FaFacebookF size={20} className="mr-2" /> Follow us on Facebook
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
