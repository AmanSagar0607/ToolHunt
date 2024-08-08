import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscCoffee } from 'react-icons/vsc';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold">
        PassGen
      </Link>

      <div className="hidden md:flex items-center justify-center space-x-4">
        <Link to="/" className="text-link">
          Home
        </Link>
        <Link to="/pricing" className="text-link">
          Pricing
        </Link>
        <Link to="/pricing" className="text-link">
          Pricing
        </Link>
      </div>

      <div className="flex items-center space-x-10">
        {/* <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-2 py-1 rounded"
          />
          <button
            onClick={handleSearch}
            className="px-2 py-1 bg-blue-500 rounded flex items-center justify-center"
          >
            <FaSearch className="text-white" />
          </button>
        </div> */}

        <a
          href="https://buymeacoffee.com/amansagar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link hidden md:block"
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
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center md:hidden">
          <Link to="/" className="py-2 text-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/pricing" className="py-2 text-link" onClick={toggleMenu}>
            Pricing
          </Link>
          <a
            href="https://buymeacoffee.com/amansagar"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-link"
            title="Buy me a coffee"
          >
            <VscCoffee className="h-7 w-7" />
          </a>
          <div className="flex items-center justify-center space-x-2 py-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="px-2 py-1 rounded"
            />
            <button
              onClick={handleSearch}
              className="px-2 py-1 bg-blue-500 rounded flex items-center justify-center"
            >
              <FaSearch className="text-white" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
