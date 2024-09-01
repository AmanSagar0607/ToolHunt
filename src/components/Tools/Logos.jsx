import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";
import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import { BsStars } from "react-icons/bs";

const Logos= () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const resources = [
    { id: 1, title: "Logo Dust", link: "https://logodust.com" },
    { id: 2, title: "Logobook", link: "https://logobook.com" },
    { id: 3, title: "Hatchful", link: "https://hatchful.shopify.com" },
    { id: 4, title: "Logo Maker", link: "https://www.logomaker.com" },
    { id: 5, title: "LogoTaco", link: "https://logotaco.com" },
    { id: 6, title: "Fiverr Logo Maker", link: "https://www.fiverr.com/logo-maker" },
    { id: 7, title: "DesignEvo", link: "https://www.designevo.com" },
    { id: 8, title: "Logo To Use", link: "https://www.logotouse.com" },
    { id: 9, title: "IconKitchen", link: "https://www.iconkitchen.com" },
    { id: 10, title: "Free Logos", link: "https://freelogos.com" },
  ];
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = resources
        .filter((resource) =>
          resource.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((resource) => resource.title);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleBackClick = () => {
  //   navigate(-1); // Navigate to the previous page
  // };

  return (
    <div
      className={`app-container ${
        isDarkMode ? "bg-[#141414] text-white" : "bg-[#F5F5F4] text-black"
      }`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        handleThemeToggle={handleThemeToggle}
        onSearch={handleSearch}
      />

      {/* Breadcrumbs */}
      <div className="breadcrumbs fixed flex justify-between items-center sm:mt-26 mt-24 sm:pl-40 ml-2 pl-6 pr-6 sm:pr-36">
        <ul className="flex space-x-1">
          <li>
            <a
              href="/home"
              className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
            >
              <span className="no-underline">Home</span>
            </a>
          </li>
          <li>
            <a
              href="/logos"
              className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
            >
              <span className="no-underline">Logos</span>
            </a>
          </li>
        </ul>
      </div>

      {/* BBack Button */}
      {/* <div className="flex justify-between items-center sm:mt-28 mt-24 sm:pl-36 ml-2 pl-6 pr-6 sm:pr-36">
        <button
          onClick={handleBackClick}
          className="flex items-center px-3 py-2 rounded-lg transition duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div> */}

      <div className="main-content text-center">
        <h1 className="text-xl sm:text-5xl sm:mt-26 mt-24 font-bold sm:font-bold pl-4 pr-4 poly-regular leading-[2rem] sm:leading-[3.2rem]">
          <span className="text-xl sm:text-5xl sm:mt-28 mt-24 font-bold sm:font-normal pl-4 pr-4 poly-regular leading-[2rem] sm:leading-[3.2rem]">
            <span>
            Logos{" "}
              {/* <span className="inline-block">
                <BsStars className="text-yellow-400" />
              </span>{" "} */}
            </span>
          </span>
        </h1>

        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-lg mx-auto sm:mt-18 mt-12  sm:mb-24 mb-12">
          <div className="absolute inset-y-0 left-0 pl-12 sm:pl-6 flex items-center pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Tools & Resources"
            className="pl-16 sm:pl-14 sm:w-full bg-white dark:bg-white px-16 sm:px-16 py-3 sm:py-4 border rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-500"
          />
        </div>
      </div>

      <div
        className={`cards cards-container ${
          isDarkMode ? "bg-[#141414] text-white" : "bg-[#F5F5F4] text-black"
        } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0 py-8`}
      >
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              className={`card border p-4 rounded shadow-lg flex flex-col items-center transition-all duration-300 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              <img
                src={resource.avatar}
                alt={resource.title}
                className="w-14 h-auto rounded-full"
              />
              <h2 className="text-2xl font-semibold  mt-5">{resource.title}</h2>
              {/* <p className="text-sm font-semibold mt-3">
                {resource.discription}
              </p> */}
              {/* <div className="mt-5">
                <button
                  className="align-left w-full px-4 py-2 text-sm font-medium text-center text-[#93e003] bg-zinc-800  rounded-xl"
                  type="button"
                >
                  Use This
                </button>
              </div> */}
            </a>
          ))
        ) : (
          <div className=" text-center justify-center">No results found</div>
        )}
      </div>

      <div className={isDarkMode ? "dark" : ""}>
        {/* Your content here */}
        <ScrollToTopButton isDarkMode={isDarkMode} />
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Logos;
