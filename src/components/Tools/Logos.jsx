import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft,FaSearch  } from 'react-icons/fa';
import { GiDustCloud } from "react-icons/gi";
import { LuBird } from "react-icons/lu";
import { RiFontSansSerif } from "react-icons/ri";
import { GiTacos } from "react-icons/gi";
import { FaBook } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { SiGamemaker } from "react-icons/si";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";
import { IoIosCheckboxOutline } from "react-icons/io";
// import { LuPalette } from "react-icons/lu";
import Navbar from "./../Navbar";
import Footer from "./../Footer";

const Logos = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);

  const logoResources = [
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

  const titleToIconMap = {
    "Logo Dust": <GiDustCloud  />,
    "Logobook": <FaBook/>,
    "Hatchful": <LuBird  />,
    "Logo Maker": <SiGamemaker/>,
    "LogoTaco": <GiTacos />,
    "Fiverr Logo Maker": <TbBrandFiverr/>,
    "DesignEvo": <AiOutlineAntDesign />,
    "Logo To Use": <IoIosCheckboxOutline/>,
    "IconKitchen": <MdOutlineSoupKitchen />,
    "Free Logos": <FaRegPenToSquare/>,
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = logoResources
        .filter((resource) =>
          resource.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((resource) => resource.title);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filteredResources = logoResources.filter((resource) =>
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
        Free Logos
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
                {titleToIconMap[resource.title] || <RiFontSansSerif/>}{" "}
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

export default Logos;
