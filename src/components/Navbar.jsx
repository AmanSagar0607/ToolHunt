import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscCoffee } from 'react-icons/vsc';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleToolsDropdown = () => {
    setToolsDropdownOpen(!toolsDropdownOpen);
  };

  return (
    <nav className={`navbar flex items-center justify-between p-4 text-white ${menuOpen ? 'bg-black' : ''}`}>
      <Link to="/" className="sm:text-2l text-2xl font-bold bg-gradient-to-tl from-slate-400 via-violet-500 to-zinc-400 bg-clip-text text-transparent no-underline">
        ToolHunt
      </Link>

      <div className="hidden md:flex items-center space-x-4">
        <Link to="/" className="no-underline hover:text-gray-300">
          Home
        </Link>
        <div className="relative">
          <button
            onClick={toggleToolsDropdown}
            className="flex items-center space-x-2 space-y-1 no-underline hover:text-gray-300"
          >
            <span>Other Tools</span>
            <FaChevronDown className={`transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {toolsDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-zinc-950 text-white rounded shadow-lg w-48">
              <Link to="/passgen" className="block px-16 justify-center py-2 hover:bg-zinc-900 no-underline">PassGen</Link>
              {/* <Link to="/tool2" className="block px-4 py-2 hover:bg-zinc-900 no-underline">Tool 2</Link> */}
              {/* Add more tools here */}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="https://buymeacoffee.com/amansagar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link hidden md:block no-underline"
          title="Buy me a coffee"
        >
          <VscCoffee className="h-7 w-7" />
        </a>

        <button
          className="block md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-800 flex flex-col items-center md:hidden z-50">
          <Link to="/" className="py-2 no-underline hover:text-gray-400" onClick={toggleMenu}>
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleToolsDropdown}
              className="py-2 no-underline hover:text-gray-200 flex items-center space-x-2"
            >
              <span>Other Tools</span>
              <FaChevronDown className={`transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {toolsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-black text-white rounded shadow-lg w-full">
                <Link to="/passgen" className="block px-4 py-2 hover:bg-gray-700 no-underline">PassGen</Link>
                <Link to="/tool2" className="block px-4 py-2 hover:bg-gray-700 no-underline">Tool 2</Link>
                {/* Add more tools here */}
              </div>
            )}
          </div>
          <a
            href="https://buymeacoffee.com/amansagar"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-link no-underline"
            title="Buy me a coffee"
          >
            <VscCoffee className="h-7 w-7" />
          </a>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
