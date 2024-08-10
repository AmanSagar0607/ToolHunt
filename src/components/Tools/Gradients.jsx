import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuPalette } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import {
  FiDroplet,
  FiImage,
  FiBox,
  FiLayout,
  FiGrid,
  FiFeather,
  FiHexagon,
} from "react-icons/fi"; // Outline icons
import Navbar from "./../Navbar";
import Footer from "./../Footer";

const Gradients = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);

  const gradientsResources = [
    {
      id: 1,
      title: 'Gradient Page',
      description: 'Get 90 high-quality gradient wallpapers in 5K resolution',
      link: 'https://www.gradientpage.com',
    },
    {
      id: 2,
      title: 'Super Undesigner',
      description: 'A collection of beautiful gradients for inspiration',
      link: 'https://superundesigner.com',
    },
    {
      id: 3,
      title: 'Grabient',
      description: 'Beautiful and simple UI for generating web gradients.',
      link: 'https://www.grabient.com',
    },
    {
      id: 4,
      title: 'Multicolor Gradients',
      description: 'Pure CSS Code, JPG Download, Open Source!',
      link: 'https://multicolored-gradients.com',
    },
    {
      id: 5,
      title: 'Colorsinspo',
      description: 'Thousands of beautiful color palettes you can use directly with one click.',
      link: 'https://colorsinspo.com',
    },
    {
      id: 6,
      title: 'uiGradients',
      description: 'A handpicked collection of beautiful color gradients for designers and developers.',
      link: 'https://uigradients.com',
    },
    {
      id: 7,
      title: 'WebGradients',
      description: 'A free collection of 180 linear gradients that you can use as content backdrops in any part of your website.',
      link: 'https://webgradients.com',
    },
    {
      id: 8,
      title: 'Mesh Gradient',
      description: 'Hand-crafted collection of mesh gradients for designers and developers.',
      link: 'https://meshgradients.com',
    },
  ];

  const titleToIconMap = {
    "Gradient Page": <FiImage />, // Represents the wallpapers and images
    "Super Undesigner": <FiFeather />, // Represents design and creativity
    "Grabient": <FiDroplet />, // Represents gradients and fluid design
    "Multicolor Gradients": <FiGrid />, // Represents a collection of gradients
    "Colorsinspo": <LuPalette />, // Represents color palettes
    "uiGradients": <FiHexagon />, // Represents structured, design-oriented gradients
    "WebGradients": <FiLayout />, // Represents layouts and gradients for web
    "Mesh Gradient": <FiBox />, // Represents 3D or mesh-based gradients
  };
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = gradientsResources
        .filter((resource) =>
          resource.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((resource) => resource.title);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filteredResources = gradientsResources.filter((resource) =>
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
          Gradients
        </h1>
        {/* <p className="text-center text-gray-300 text-lg mt-2 sm:text-xl">
        Discover Stunning Color Palettes and Gradient Inspirations for Your Projects
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

      <div className="cards  cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              className="card border p-4 rounded shadow flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white text-center"
            >
              <div className="text-4xl mb-4">
                {titleToIconMap[resource.title] || <FiBox />}{" "}
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

export default Gradients;
