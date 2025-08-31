import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-[#FDFDFD] sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-bold text-[#2A5D84]">
          Dundalk Presbyterian Church
        </h1>
      </div>

      <div className="flex items-center space-x-6">
        <ul className="hidden md:flex space-x-6 text-[#4B5563] font-medium">
          <li>
            <a href="#groups" className="hover:text-[#2A5D84] transition">
              Groups
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-[#2A5D84] transition">
              Events
            </a>
          </li>
          <li>
            <a href="#faqs" className="hover:text-[#2A5D84] transition">
              FAQs
            </a>
          </li>
        </ul>

        {/* Facebook icon */}
        <a
          href="https://www.facebook.com/YourChurchPage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4B5563] hover:text-[#2A5D84] transition"
        >
          <FaFacebookF size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
