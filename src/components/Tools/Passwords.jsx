import { useState } from "react";
import { FaPalette, FaDownload, FaLink, FaFonticonsFi, FaSearch } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { CiPalette } from "react-icons/ci";
import { FaSpaceAwesome } from "react-icons/fa6";
import { ImFont } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { CiText } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
// import { LuPalette } from "react-icons/lu";
import {
  FiType,
  FiEdit,
  FiBookOpen,
  FiPenTool,
  FiBold,
  FiItalic,
  FiFeather,
  FiUnderline,
} from "react-icons/fi"; // Outline icons for typography
import { RiLockPasswordLine } from "react-icons/ri";
import Navbar from "./../Navbar";
import Footer from "./../Footer";

const Passwords = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);

  const passwordsResources = [
    { id: 1, title: "PassGen", link: "/passgen" },
  ];

  const titleToIconMap = {
    "PassGen": <RiLockPasswordLine />,
    "Google Fonts": <FaFonticonsFi />,
    "Font Squirrel": <FiBold />,
    DaFont: <FiItalic />,
    "Abstract Fonts": <FiUnderline />,
    "CSSans Pro": <CiText />,
    Ficture: <FiPenTool />,
    "Color Font": <FaPalette />,
    FontPair: <FiEdit />,
    Freebiesbug: <FiBookOpen />,
    "Download Fonts": <FaDownload />,
    "Leon Sans": <FiType />,
    "FontPairing ByPeople": <FaLink />,
    Typewolf: <CiText />,
    "Font In Logo": <FiBold />,
    Fontbundles: <GoPackage />,
    "Handwritten.js": <FiFeather />,
    "Ztext.js": <FiType />,
    Colorsandfonts: <CiPalette />,
    Calligrapher: <FiFeather />,
    "Text to Handwriting": <CiText />,
    Fontshare: <FaFonticonsFi />,
    "Font Space": <FaSpaceAwesome />,
    "Font In Use": <ImFont />,
    "What Font Is": <CiSearch />,
    "Pousse ta fonte": <FiPenTool />,
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = passwordsResources
        .filter((resource) =>
          resource.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((resource) => resource.title);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filteredResources = passwordsResources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };


  return (
    <div className="app-container">
      <Navbar onSearch={handleSearch} />
      <div className="flex justify-start sm:mt-28 mt-24 sm:pl-20 pl-6">
        <button 
          onClick={handleBackClick} 
          className="flex items-center text-white bg-black px-3 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div>
      <div className="main-content">
        <h1 className="text-center text-white text-2xl -sm:mt-0 -mt-10 sm:text-3xl font-bold">
        Password Generators
        </h1>
        {/* <p className="text-center text-gray-300 text-lg mt-2 sm:text-xl">
        Discover Perfect Font Pairs with These Top Free Typography Websites
        </p> */}

        <div className="relative text-sm sm:mt-10 mt-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto sm:mb-24 mb-12">
          <div className="absolute inset-y-0 left-0 pl-10 sm:pl-5 flex items-center pointer-events-none">
            <FaSearch className="text-gray-500" /> {/* React Icon for search */}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Tools & Resources"
            className="pl-12 sm:pt-3 pt-4 sm:w-full w-72 px-5 py-3 border rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-500"
          />
        </div>
      </div>

      <div className=" cards cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              className="card border p-4 rounded shadow flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white text-center"
            >
              <div className="text-4xl mb-4">
                {titleToIconMap[resource.title] || <FaFonticonsFi />}{" "}
                {/* Default icon if title not found */}
              </div>
              <h2 className="text-sm font-bold mb-4 p-2 rounded-2xl">
                {resource.title}
              </h2>
            </a>
          ))
        ) : (
          <div className="text-center mt-10">No results found</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Passwords;
