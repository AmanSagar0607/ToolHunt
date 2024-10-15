import { useState } from "react";
import { Link } from "react-router-dom";
import { VscCoffee } from "react-icons/vsc";
import { FaBars, FaTimes } from "react-icons/fa";
// import { ImSun } from "react-icons/im";
// import { IoMoonOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Navbar = ({ isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [rotateIcon, setRotateIcon] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const toggleTheme = () => {
  //   handleThemeToggle();
  //   setRotateIcon(!rotateIcon); // Toggle rotation
  // };

  return (
    <nav
      className={`navbar flex items-center justify-between p-4 rounded-2xl ${
        menuOpen
          ? isDarkMode
            ? "bg-zinc-800 text-white"
            : "bg-white text-black"
          : isDarkMode
          ? "bg-zinc-900 text-white"
          : " text-black bg-white dark:bg-gray-900/5 backdrop-blur-md border border-white/25 dark:border-black/25 shadow-md "
      } border-b-1 ${
        isDarkMode ? "border-gray-700" : "border-gray-200"
      } transition-colors duration-100 ease-in-out `}
    >
      <Link
        to="/"
        className={`sm:text-3xl text-2xl font-bold lobster-regular leading-[2rem] rounded-xl pl-2 pr-2 pt-1 pb-1 ${
          isDarkMode ? "text-[#93e003]" : "text-[#93e003]"
        }`}
      >
        Th
      </Link>

      <div className="hidden md:flex items-center text-lg tracking-wider space-x-8 ml-32 ">
        <Link to="/home" className="no-underline hover:text-gray-300">
          Home
        </Link>
        <a
          href="https://forms.gle/jbuSLLtW2ATke3649"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:text-gray-300"
        >
          Submit Tool
        </a>
        <a
          href="https://buymeacoffee.com/amansagar"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 text-link no-underline"
          title="Buy me a coffee"
        >
          <VscCoffee
            className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`}
          />
        </a>

        {/* <button
          onClick={toggleTheme}
          className="text-lg flex items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${
              rotateIcon ? "rotate-0" : "rotate-180"
            }`}
          >
            {isDarkMode ? (
              <ImSun className="transition-transform duration-300 ease-in-out" />
            ) : (
              <IoMoonOutline className="transition-transform duration-300 ease-in-out" />
            )}
          </div>
        </button> */}
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="https://www.producthunt.com/posts/toolhunt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-toolhunt"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-sm"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=478083&theme=dark"
            alt="ToolHunt - Discover Top Tools for Designers & Developers | Product Hunt"
            style={{ width: "170px", height: "35px" }}
            width="180"
            height="54"
          />
        </a>

        <button className="block md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`absolute top-20 p-6 text-lg font-normal left-0 w-full flex flex-col items-center md:hidden z-50 ${
            isDarkMode ? "bg-zinc-800 rounded-t-3xl rounded-b-3xl" : "bg-white text-black rounded-t-3xl rounded-b-3xl"
          }`}
        >
          <Link
            to="/"
            className="py-2 no-underline hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <a
            href="https://forms.gle/jbuSLLtW2ATke3649"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 no-underline hover:text-gray-400"
            onClick={toggleMenu}
          >
            Submit Tool
          </a>
          <Link
            to="/"
            className="py-2 no-underline hover:text-gray-400"
            onClick={toggleMenu}
          >
            ToolHunt
          </Link>

          <a
            href="https://buymeacoffee.com/amansagar"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-link no-underline"
            title="Buy me a coffee"
          >
            <VscCoffee
              className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`}
            />
          </a>

          {/* <button
            onClick={toggleTheme}
            className="text-lg flex items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105 mt-2"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                rotateIcon ? "rotate-0" : "rotate-180"
              }`}
            >
              {isDarkMode ? (
                <ImSun className="transition-transform duration-300 ease-in-out" />
              ) : (
                <IoMoonOutline className="transition-transform duration-300 ease-in-out" />
              )}
            </div>
          </button> */}

          <a
            href="https://www.producthunt.com/posts/toolhunt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-toolhunt"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=478083&theme=dark"
              alt="ToolHunt - Discover Top Tools for Designers & Developers | Product Hunt"
              style={{ width: "170px", height: "35px" }}
              width="180"
              height="54"
            />
          </a>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  handleThemeToggle: PropTypes.func.isRequired,
};

export default Navbar;
