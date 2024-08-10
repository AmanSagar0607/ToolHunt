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
  FiCircle,
  FiEye,
} from "react-icons/fi"; // Outline icons
import Navbar from "./../Navbar";
import Footer from "./../Footer";

const Colors = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);

  const colorResources = [
    { id: 1, title: "Colors Interactor", link: "https://colorsinspo.com/colors-interactor" },
    { id: 2, title: "Super Undesigner", link: "https://superund.esigner.com" },
    { id: 3, title: "Color Hunt", link: "https://colorhunt.co" },
    { id: 4, title: "Color Lisa", link: "https://colorlisa.com" },
    { id: 5, title: "Tint UI", link: "https://tintui.com" },
    { id: 6, title: "Colormind", link: "http://colormind.io" },
    { id: 7, title: "CSS Gradient", link: "https://cssgradient.io" },
    { id: 8, title: "Picular", link: "https://picular.co" },
    { id: 9, title: "Adobe Color CC", link: "https://color.adobe.com/create/color-wheel" },
    { id: 10, title: "Coolors", link: "https://coolors.co" },
    { id: 11, title: "Material Palette", link: "https://www.materialpalette.com" },
    { id: 12, title: "Colorinspire", link: "https://colorinspire.org" },
    { id: 13, title: "Tilda Colors", link: "https://tilda.cc/colors" },
    { id: 14, title: "Khroma", link: "http://khroma.co" },
    { id: 15, title: "Flat UI Colors", link: "https://flatuicolors.com" },
    { id: 16, title: "ColorSpace", link: "https://mycolor.space" },
    { id: 17, title: "Colorffy", link: "https://colorffy.com" },
    { id: 18, title: "Colorable", link: "https://colorable.jxnblk.com" },
    { id: 19, title: "Happy Hues", link: "https://www.happyhues.co" },
    { id: 20, title: "BrandColors", link: "https://brandcolors.net" },
    { id: 21, title: "Colorsinspo", link: "https://colorsinspo.com" },
    { id: 22, title: "Parametric Color Mixer", link: "https://www.parametriccolormixer.com" },
    { id: 23, title: "Leonardo", link: "https://leonardocolor.io" },
    { id: 24, title: "Cohesive Colors", link: "https://javier.xyz/cohesive-colors" },
    { id: 25, title: "Tailwind Ink", link: "https://tailwind.ink" },
    { id: 26, title: "Colorsandfonts", link: "https://colorsandfonts.com" },
    { id: 27, title: "2 Color Combinations", link: "https://2colors.colorion.co" },
    { id: 28, title: "Farbvelo", link: "https://farbvelo.elastiq.ch" },
    { id: 29, title: "Website Color Schemes", link: "https://www.sliderrevolution.com/resources/color-schemes/" },
    { id: 30, title: "Colors UI", link: "https://colorsui.com" },
    { id: 31, title: "Mobile Palette Generator", link: "https://palettegenerator.com" },
    { id: 32, title: "FettePalette", link: "https://fettepalette.com" },
    { id: 33, title: "Pppalette", link: "https://www.pppalette.com" },
    { id: 34, title: "Hue Tools", link: "https://huetools.com" },
    { id: 35, title: "Cccolor", link: "https://cccolor.co" },
    { id: 36, title: "ColorHuddle", link: "https://colorhuddle.com" },
  ];
  
  const titleToIconMap = {
    "Colors interactor": <FiDroplet />,
    "Super Undesigner": <FiFeather />,
    'Color Hunt': <LuPalette />,
    "Color Lisa": <FiImage />,
    "tint ui": <FiLayout />,
    Colormind: <FiHexagon />,
    "CSS Gradient": <FiGrid />,
    Picular: <FiCircle />,
    "Adobe Color CC": <FiBox />,
    'Coolors': <LuPalette />,
    "Material Palette": <FiLayout />,
    Colorinspire: <FiDroplet />,
    "Tilda Colors": <FiGrid />,
    Khroma: <FiEye />,
    "Flat UI Colors": <FiBox />,
    ColorSpace: <FiHexagon />,
    Colorffy: <FiDroplet />,
    Colorable: <FiEye />,
    "Happy Hues": <FiFeather />,
    'BrandColors': <LuPalette />,
    Colorsinspo: <FiImage />,
    "Parametric Color Mixer": <FiCircle />,
    Leonardo: <FiBox />,
    'Cohesive Colors': <LuPalette />,
    "Tailwind Ink": <FiDroplet />,
    Colorsandfonts: <FiHexagon />,
    "2 Color Combinations": <FiFeather />,
    Farbvelo: <FiCircle />,
    "Website Color Schemes": <FiGrid />,
    'Colors UI': <LuPalette />,
    "Mobile Palette Generator": <FiLayout />,
    FettePalette: <FiBox />,
    Pppalette: <FiDroplet />,
    "Hue Tools": <FiHexagon />,
    Cccolor: <FiEye />,
    ColorHuddle: <FiBox />,
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = colorResources
        .filter((resource) =>
          resource.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((resource) => resource.title);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filteredResources = colorResources.filter((resource) =>
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
        <h1 className="text-center text-white text-2xl -sm:mt-0 -mt-10  sm:text-3xl font-bold">
          Colors
        </h1>
        {/* <p className="text-center text-gray-300 text-lg mt-2 sm:text-xl">
          Best free colors tools to find the perfect color palette
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

export default Colors;
