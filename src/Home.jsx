import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import {
  FaSearch,
  FaPalette,
  FaRainbow,
  FaDrawPolygon,
  FaIcons,
  FaCode,
  FaTag,
  FaDev,
} from "react-icons/fa";
import { BsStars, BsEmojiSmileUpsideDown } from "react-icons/bs";
import { BiSolidColor } from "react-icons/bi";
import { RiAiGenerate, RiCoupon3Line } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { TbApi } from "react-icons/tb";
import { HiTrendingUp } from "react-icons/hi";
import { FaRegImages } from "react-icons/fa6";
import { GrCopy } from "react-icons/gr";
import { IoPlayCircleOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import { VscSearchFuzzy } from "react-icons/vsc";
import { LuFileStack, LuLayoutTemplate } from "react-icons/lu";
import { SiOpensourcehardware } from "react-icons/si";
import { GoDatabase, GoGoal } from "react-icons/go";
import { IoGameControllerOutline, IoBook } from "react-icons/io5";
import { AiOutlineOpenAI } from "react-icons/ai";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import {
  PiPaintRollerBold,
  PiSelectionBackgroundBold,
  PiToolboxDuotone,
} from "react-icons/pi";
import {
  TbPasswordMobilePhone,
  TbTemplate,
  TbBrandTailwind,
  TbBackground,
} from "react-icons/tb";
import {
  MdOutlineTypeSpecimen,
  MdAnimation,
  MdOutlineAutoGraph,
  MdPattern,
  MdAutoFixHigh,
  MdOutlineAudiotrack,
} from "react-icons/md";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  // const [hoveredCardId, setHoveredCardId] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Inspiration",
      icon: <BsStars className="text-yellow-400" />,
      content: "Find design inspiration",
      link: "/inspiration",
    },
    {
      id: 2,
      title: "Colors",
      icon: <BiSolidColor className="text-pink-400" />,
      content: "Explore color palettes",
      link: "/colors",
    },
    {
      id: 3,
      title: "Gradients",
      icon: <FaRainbow className="text-indigo-400" />,
      content: "Discover gradient tools",
      link: "/gradients",
    },
    {
      id: 4,
      title: "Typography",
      icon: <MdOutlineTypeSpecimen className="text-blue-300" />,
      content: "Browse typography resources",
      link: "/typography",
    },
    {
      id: 5,
      title: "Logos",
      icon: <FaTag className="text-green-400" />,
      content: "Find logo design tools",
      link: "/logos",
    },
    {
      id: 6,
      title: "Password Generator",
      icon: <TbPasswordMobilePhone className="text-red-400" />,
      content: "Generate secure passwords",
      link: "/passwords",
    },
    {
      id: 7,
      title: "Powerpoint Templates",
      icon: <TbTemplate className="text-teal-300" />,
      content: "Powerpoint templates",
    },
    {
      id: 8,
      title: "Code snippets",
      icon: <FaCode className="text-orange-300" />,
      content: "Find code snippets",
    },
    {
      id: 9,
      title: "Tailwind CSS",
      icon: <TbBrandTailwind className="text-sky-300" />,
      content: "Tailwind CSS resources",
    },
    {
      id: 10,
      title: "Generators",
      icon: <RiAiGenerate className="text-gray-300" />,
      content: "Various generators",
    },

    {
      id: 11,
      title: "Open Source Icons",
      icon: <SiOpensourcehardware className="text-lime-300" />,
      content: "Free open source icons",
    },
    {
      id: 12,
      title: "Emoji",
      icon: <BsEmojiSmileUpsideDown className="text-fuchsia-400" />,
      content: "Emoji resources",
    },
    {
      id: 13,
      title: "Animations",
      icon: <MdAnimation className="text-teal-400" />,
      content: "Animation tools",
    },
    {
      id: 14,
      title: "Illustrations",
      icon: <PiPaintRollerBold className="text-rose-500" />,
      content: "Find illustrations",
    },
    // { id: 16, title: "404 Illustrations", icon: <FaTools className="text-red-600" />, content: "404 error illustrations" },
    {
      id: 15,
      title: "Icons",
      icon: <FaIcons className="text-purple-400" />,
      content: "Browse icons",
    },

    {
      id: 16,
      title: "Backgrounds",
      icon: <TbBackground className="text-green-400" />,
      content: "Find backgrounds",
    },
    {
      id: 17,
      title: "Upscalers",
      icon: <MdOutlineAutoGraph className="text-yellow-300" />,
      content: "Image upscalers",
    },
    {
      id: 18,
      title: "3D Illustrations",
      icon: <HiOutlineSquare3Stack3D className="text-blue-400" />,
      content: "3D illustrations",
    },
    {
      id: 19,
      title: "Images",
      icon: <FaRegImages className="text-orange-400" />,
      content: "Colorize images",
    },

    {
      id: 20,
      title: "Patterns",
      icon: <MdPattern className="text-red-500" />,
      content: "Explore patterns",
    },
    {
      id: 21,
      title: "Videos",
      icon: <IoPlayCircleOutline className="text-purple-400" />,
      content: "Browse videos",
    },
    {
      id: 22,
      title: "Audios",
      icon: <MdOutlineAudiotrack className="text-blue-400" />,
      content: "Find audio resources",
    },
    {
      id: 23,
      title: "Mockups",
      icon: <LuFileStack className="text-pink-400" />,
      content: "Explore best mockups",
    },
    {
      id: 24,
      title: "Design patterns",
      icon: <LuLayoutTemplate className="text-green-400" />,
      content: "Design patterns resources",
    },
    {
      id: 25,
      title: "Prototyping",
      icon: <FaDrawPolygon className="text-cyan-400" />,
      content: "Prototyping tools",
    },
    {
      id: 26,
      title: "Design Research",
      icon: <VscSearchFuzzy className="text-teal-400" />,
      content: "Design research resources",
    },
    {
      id: 27,
      title: "No-code Website",
      icon: <CgWebsite className="text-orange-500" />,
      content: "No-code website builders",
    },
    {
      id: 28,
      title: "Copywriting",
      icon: <GrCopy className="text-indigo-400" />,
      content: "Copywriting tools",
    },
    {
      id: 29,
      title: "Remove Background",
      icon: <PiSelectionBackgroundBold className="text-gray-600" />,
      content: "Remove image backgrounds",
    },
    {
      id: 30,
      title: "No-code Databases",
      icon: <GoDatabase className="text-emerald-400" />,
      content: "No-code databases",
    },
    {
      id: 31,
      title: "Artificial Intelligence",
      icon: <AiOutlineOpenAI className="text-green-200" />,
      content: "AI tools and resources",
    },
    {
      id: 32,
      title: "Game design",
      icon: <IoGameControllerOutline className="text-purple-400" />,
      content: "Game design tools",
    },
    {
      id: 33,
      title: "Browser extensions",
      icon: <IoExtensionPuzzleOutline className="text-sky-300" />,
      content: "Explore Browser extensions",
    },
    {
      id: 34,
      title: "No-code Automations",
      icon: <MdAutoFixHigh className="text-yellow-400" />,
      content: "No-code automations",
    },
    {
      id: 35,
      title: "API",
      icon: <TbApi className="text-teal-300" />,
      content: "APIs tools & resources",
    },
    {
      id: 36,
      title: "Tools",
      icon: <PiToolboxDuotone className="text-blue-400" />,
      content: "Explore new tools",
    },
    {
      id: 37,
      title: "Trends",
      icon: <HiTrendingUp className="text-emerald-400" />,
      content: "Trends and analytics",
    },
    {
      id: 38,
      title: "Productivity",
      icon: <GoGoal className="text-yellow-400" />,
      content: "Productivity tools",
    },

    {
      id: 39,
      title: "Dev Tools",
      icon: <FaDev className="text-violet-400" />,
      content: "Explore Dev Tools",
    },

    {
      id: 40,
      title: "Books",
      icon: <IoBook className="text-lime-400" />,
      content: "Books and reading resources",
    },
    {
      id: 41,
      title: "Learn Development",
      icon: <FaPalette className="text-teal-200" />,
      content: "Learn Web & App Dev",
    },
    {
      id: 42,
      title: "Coupons",
      icon: <RiCoupon3Line className="text-red-400" />,
      content: "Explore Coupons and deals",
    },
  ];

  
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = cards
        .filter((card) =>
          card.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((card) => card.title);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  
  return (
    <div className="app-container">
      <Navbar onSearch={handleSearch} />
      {/* back button */}
      <div className="flex justify-start sm:mt-28 mt-24 sm:pl-20 pl-6">
        <button 
          onClick={handleBackClick} 
          className="flex items-center text-white bg-black px-3 py-2 rounded-lg transition duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div>
      <div className="main-content text-center">
        <h1 className="text-2xl px-2 py-15 sm:text-5xl sm:mt-4 -mt-10 font-bold">
          Unleash Your Creativity with Top Tools for{" "}
          <br className="hidden sm:block" />
          <div className="flex flex-row sm:mt-2 mt-1 gap-3 sm:gap-4 justify-center">
            <div className="bg-gradient-to-br from-sky-800 via-violet-200 to-sky-200 bg-clip-text text-transparent">
              Designers
            </div>
            <div className="text-white">&</div>
            <div className="py-1 sm:py-1 bg-gradient-to-br from-sky-800 via-violet-200 to-sky-200 bg-clip-text text-transparent leading-none">
              Developers
            </div>
          </div>
        </h1>

        <h2 className="text-center text-white text-xl sm:mt-16 mt-12 sm:mb-6 mb-6 sm:text-2xl font-semibold">
          Discover Handpicked Tools & Resources Just for You 😉
        </h2>

        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto sm:mb-24 mb-12">
          <div className="absolute inset-y-0 left-0 sm: pl-10 sm:pl-5 flex items-center pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Tools & Resources"
            className="pl-12 sm:pl-11 sm:w-full w-72 px-5 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-500"
          />
        </div>
      </div>

      <div className="cards cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="relative card border p-4 rounded shadow flex flex-col items-center justify-center transition-all duration-300 bg-black text-white text-center group"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="text-xl font-bold mb-4">{card.title}</h2>
              <p>{card.content}</p>

              {/* Developer Mode text */}
              {card.id >= 7 && card.id <= 42 && (
                <div className="absolute inset-0 flex items-center justify-center cursor-not-allowed bg-black bg-opacity-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-bold">
                    Coming Soon
                  </span>
                </div>
              )}
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

export default Home;
