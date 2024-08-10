import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import {
  FaSearch,
  FaCode,
  FaPalette,
  FaBrush,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa"; // Example icons
import Navbar from "./../Navbar";
import Footer from "./../Footer";

const Inspiration = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);

  const inspirationResources = [
    { id: 1, title: "Collect UI", link: "https://collectui.com" },
    { id: 2, title: "UI Sources", link: "https://uisources.com" },
    { id: 3, title: "Dribbble", link: "https://dribbble.com" },
    { id: 4, title: "Behance", link: "https://behance.net" },
    { id: 5, title: "Awwwards", link: "https://awwwards.com" },
    { id: 6, title: "One Page Love", link: "https://onepagelove.com" },
    { id: 7, title: "Glitch", link: "https://glitch.com" },
    { id: 8, title: "Codepen Topics", link: "https://codepen.io/topics" },
    { id: 9, title: "UI Movement", link: "https://uimovement.com" },
    { id: 10, title: "httpster", link: "https://httpster.net" },
    { id: 11, title: "DesignMunk", link: "https://designmunk.com" },
    {
      id: 12,
      title: "JenSimmons",
      link: "https://jensimmons.com",
    },
    { id: 13, title: "iOS Icon Gallery", link: "https://iosicongallery.com" },
    { id: 14, title: "Color Wander", link: "https://colorwander.com" },
    { id: 15, title: "scrnshts", link: "https://scrnshts.com" },
    { id: 16, title: "Product Hunt", link: "https://producthunt.com" },
    { id: 17, title: "Search by Muzli", link: "https://muz.li" },
    { id: 18, title: "SaaS Pages", link: "https://saas-pages.com" },
    { id: 19, title: "Email Love", link: "https://emaillove.com" },
    { id: 20, title: "Tailwind UI", link: "https://tailwindui.com" },
    {
      id: 21,
      title: "SaaS landing page examples",
      link: "https://saas-landing-page-examples.com",
    },
    {
      id: 22,
      title: "Screenshot Inspiration",
      link: "https://screenshotinspiration.com",
    },
    { id: 23, title: "LaudableApps", link: "https://laudableapps.com" },
    { id: 24, title: "Flim", link: "https://flim.com" },
  ];

  const titleToIconMap = {
    "Collect UI": <FaPalette />,
    "UI Sources": <FaBrush />,
    Dribbble: <FaLightbulb />,
    Behance: <FaRocket />,
    Awwwards: <FaCode />,
    "One Page Love": <FaBrush />,
    Glitch: <FaCode />,
    "Codepen Topics": <FaPalette />,
    "UI Movement": <FaLightbulb />,
    httpster: <FaRocket />,
    DesignMunk: <FaBrush />,
    "Web Design Experiments by Jen Simmons": <FaCode />,
    "iOS Icon Gallery": <FaPalette />,
    "Color Wander": <FaBrush />,
    scrnshts: <FaLightbulb />,
    "Product Hunt": <FaRocket />,
    "Search by Muzli": <FaCode />,
    "SaaS Pages": <FaPalette />,
    "Email Love": <FaBrush />,
    "Tailwind UI": <FaLightbulb />,
    "SaaS landing page examples": <FaRocket />,
    "Screenshot Inspiration": <FaCode />,
    LaudableApps: <FaPalette />,
    Flim: <FaBrush />,
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = inspirationResources
        .filter((resource) =>
          resource.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((resource) => resource.title);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filteredResources = inspirationResources.filter((resource) =>
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
        <h1 className="text-center text-white text-2xl -sm:mt-0 -mt-4 sm:text-3xl font-black">
          Design Inspiration
        </h1>

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

      <div className="cards cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              className="card border p-4 rounded shadow flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white text-center"
            >
              <div className="text-4xl mb-4">
                {titleToIconMap[resource.title] || <FaCode />}{" "}
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

export default Inspiration;
