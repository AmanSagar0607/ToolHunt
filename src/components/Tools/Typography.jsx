import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";
import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import { BsStars } from "react-icons/bs";

const Typography = () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const resources = [
    { id: 1, title: "Beautiful Dingbats", link: "https://beautifuldingbats.com" },
    { id: 2, title: "Google Fonts", link: "https://fonts.google.com" },
    { id: 3, title: "Font Squirrel", link: "https://www.fontsquirrel.com" },
    { id: 4, title: "DaFont", link: "https://www.dafont.com" },
    { id: 5, title: "Abstract Fonts", link: "https://www.abstractfonts.com" },
    { id: 6, title: "CSSans Pro", link: "https://cssans.pro" },
    { id: 7, title: "Ficture", link: "https://ficture.com" },
    { id: 8, title: "Color Font", link: "https://colorfont.io" },
    { id: 9, title: "FontPair", link: "https://fontpair.co" },
    { id: 10, title: "Freebiesbug", link: "https://freebiesbug.com" },
    { id: 11, title: "Download Fonts", link: "https://downloadfonts.com" },
    { id: 12, title: "Leon Sans", link: "https://leonsans.com" },
    { id: 13, title: "FontPairing ByPeople", link: "https://bypeople.com/font-pairings" },
    { id: 14, title: "Typewolf", link: "https://www.typewolf.com" },
    { id: 15, title: "Font In Logo", link: "https://fontinlogo.com" },
    { id: 16, title: "Fontbundles", link: "https://fontbundles.net" },
    { id: 17, title: "Handwritten.js", link: "https://handwritten.js.org" },
    { id: 18, title: "Ztext.js", link: "https://ztext.js.org" },
    { id: 19, title: "Colorsandfonts", link: "https://colorsandfonts.com" },
    { id: 20, title: "Calligrapher", link: "https://www.calligrapher.ai" },
    { id: 21, title: "Text to Handwriting", link: "https://texttohandwriting.com" },
    { id: 22, title: "Fontshare", link: "https://www.fontshare.com" },
    { id: 23, title: "Font Space", link: "https://www.fontspace.com" },
    { id: 24, title: "Font In Use", link: "https://fontinuse.com" },
    { id: 25, title: "What Font Is", link: "https://www.whatfontis.com" },
    { id: 26, title: "Pousse ta fonte", link: "https://poussetafonte.com" },
    // Add more items as needed
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
              href="/typography"
              className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
            >
              <span className="no-underline">Typography</span>
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
            Typography{" "}
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

export default Typography;
