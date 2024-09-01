import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";

import {
  FaPalette,
  FaRainbow,
  FaDrawPolygon,
  FaIcons,
  FaCode,
  // FaTag,
  // FaDev,
} from "react-icons/fa";
import { IoLogoFoursquare } from "react-icons/io";
import { BsStars} from "react-icons/bs";
// import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { BiSolidColor } from "react-icons/bi";
import { RiAiGenerate} from "react-icons/ri";
// import {  RiCoupon3Line } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { TbApi } from "react-icons/tb";
import { HiTrendingUp } from "react-icons/hi";
import { FaRegImages } from "react-icons/fa6";
import { GrCopy } from "react-icons/gr";
import { IoPlayCircleOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import { VscSearchFuzzy } from "react-icons/vsc";
import { LuFileStack, LuLayoutTemplate } from "react-icons/lu";
// import { SiOpensourcehardware } from "react-icons/si";
import { GoDatabase, GoGoal } from "react-icons/go";
import { IoGameControllerOutline } from "react-icons/io5";
// import { IoBook } from "react-icons/io5";
import { AiOutlineOpenAI } from "react-icons/ai";
// import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import {
  PiPaintRollerBold,
  PiSelectionBackgroundBold,
  PiToolboxDuotone,
} from "react-icons/pi";
import {
  // TbPasswordMobilePhone,
  // TbTemplate,
  TbBrandTailwind,
  TbBackground,
} from "react-icons/tb";
import {
  MdOutlineTypeSpecimen,
  MdAnimation,
  MdOutlineAutoGraph,
  MdPattern,
  // MdAutoFixHigh,
  MdOutlineAudiotrack,
} from "react-icons/md";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

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
      title: "Backgrounds",
      icon: <TbBackground className="text-purple-400" />,
      content: "Find backgrounds",
      link:'/backgrounds'
    },
      
    {
      id: 5,
      title: "No-code",
      icon: <CgWebsite className="text-orange-500" />,
      content: "No-code website builders",
     link:'/nocode'
    },
    {
      id: 6,
      title: "Tailwind CSS",
      icon: <TbBrandTailwind className="text-sky-300" />,
      content: "Tailwind CSS resources",
      link:'/tailwindcss',
    },
    {
      id: 7,
      title: "Code snippets",
      icon: <FaCode className="text-orange-300" />,
      content: "Find code snippets",
      link:'codesnippets',
    },
    {
      id: 8,
      title: "Generators",
      icon: <RiAiGenerate className="text-gray-300" />,
      content: "Various generators",
      link: '/generator',
    },
    {
      id: 9,
      title: "Animations",
      icon: <MdAnimation className="text-teal-400" />,
      content: "Animation tools",
      link:'/animation',
    },
    {
      id: 10,
      title: "Illustrations",
      icon: <PiPaintRollerBold className="text-rose-500" />,
      content: "Find illustrations (3D)",
    },
    {
      id: 11,
      title: "Icons",
      icon: <FaIcons className="text-purple-400" />,
      content: "Browse icons",
      link: "/icons",
    },
    {
      id: 12,
      title: "Typography",
      icon: <MdOutlineTypeSpecimen className="text-blue-300" />,
      content: "Browse typography resources",
      link: "/typography",
    },
      
    {
      id: 13,
      title: "Upscalers",
      icon: <MdOutlineAutoGraph className="text-yellow-300" />,
      content: "Image upscalers",
    },
    {
      id: 14,
      title: "Images",
      icon: <FaRegImages className="text-orange-400" />,
      content: "Colorize images",
    },
    {
      id: 15,
      title: "Deployments",
      icon: <MdPattern className="text-red-500" />,
      content: "Explore patterns",
    },
    {
      id: 16,
      title: "Videos",
      icon: <IoPlayCircleOutline className="text-purple-400" />,
      content: "Browse videos",
    },
    {
      id: 17,
      title: "Audios",
      icon: <MdOutlineAudiotrack className="text-blue-400" />,
      content: "Find audio resources",
    },
    {
      id: 18,
      title: "Mockups",
      icon: <LuFileStack className="text-pink-400" />,
      content: "Explore best mockups",
    },
    {
      id: 19,
      title: "Design patterns",
      icon: <LuLayoutTemplate className="text-green-400" />,
      content: "Design patterns resources",
    },
    {
      id: 20,
      title: "Prototyping",
      icon: <FaDrawPolygon className="text-cyan-400" />,
      content: "Prototyping tools",
    },
    {
      id: 21,
      title: "Design Research",
      icon: <VscSearchFuzzy className="text-teal-400" />,
      content: "Design research resources",
    },
    {
      id: 22,
      title: "Logos",
      icon: <IoLogoFoursquare className="text-green-400" />,
      content: "Find logo design tools",
      link: "/logos",
    },
    {
      id: 23,
      title: "Copywriting",
      icon: <GrCopy className="text-indigo-400" />,
      content: "Copywriting tools",
    },
    {
      id: 24,
      title: "Remove Background",
      icon: <PiSelectionBackgroundBold className="text-gray-600" />,
      content: "Remove image backgrounds",
    },
    {
      id: 25,
      title: "No-code Databases",
      icon: <GoDatabase className="text-emerald-400" />,
      content: "No-code databases",
    },
    {
      id: 26,
      title: "Artificial Intelligence",
      icon: <AiOutlineOpenAI className="text-green-200" />,
      content: "AI tools and resources",
    },
    {
      id: 27,
      title: "Game design",
      icon: <IoGameControllerOutline className="text-purple-400" />,
      content: "Game design tools",
    },
    {
      id: 28,
      title: "Productive extensions",
      icon: <IoExtensionPuzzleOutline className="text-sky-300" />,
      content: "Explore Browser extensions",
    },
    {
      id: 29,
      title: "APIs",
      icon: <TbApi className="text-teal-300" />,
      content: "APIs tools & resources",
    },
    {
      id: 30,
      title: "Tools",
      icon: <PiToolboxDuotone className="text-blue-400" />,
      content: "Explore new tools",
    },
    {
      id: 31,
      title: "Trends",
      icon: <HiTrendingUp className="text-emerald-400" />,
      content: "Trends and analytics",
    },
    {
      id: 32,
      title: "Productivity",
      icon: <GoGoal className="text-yellow-400" />,
      content: "Productivity tools",
    },
    {
      id: 33,
      title: "Learn Development",
      icon: <FaPalette className="text-teal-200" />,
      content: "Learn Web & App Dev",
    }
  ];

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
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

  // const handleBackClick = () => {
  //   navigate(-2); // Navigate to the previous page
  // };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleThemeToggle = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  //   if (query.length > 0) {
  //     const filteredSuggestions = resources
  //       .filter((resource) =>
  //         resource.title.toLowerCase().includes(query.toLowerCase())
  //       )
  //       .map((resource) => resource.title);
  //     setSuggestions(filteredSuggestions);
  //   } else {
  //     setSuggestions([]);
  //   }
  // };

  // const filteredResources = resources.filter((resource) =>
  //   resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`app-container ${
        isDarkMode ? "bg-[#141414] text-white" : "bg-[#F5F5F4] text-black"
      }`}
    >
      {/* <div className={`app-container ${isDarkMode ? "{{bg:#000000}} text-white" : "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-300 via-neutral-100 to-neutral-100 text-black"}`}> */}
      <Navbar
        isDarkMode={isDarkMode}
        handleThemeToggle={handleThemeToggle}
        onSearch={handleSearch}
      />

      {/* Back Button */}
      {/* <div className="flex justify-start sm:mt-28 mt-24 sm:pl-36 ml-2 pl-6">
        <button
          onClick={handleBackClick}
          className="flex items-center px-3 py-2 rounded-lg transition duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div> */}

      <div className="main-content text-center">
        <h1 className="text-2xl sm:text-5xl sm:mt-28 mt-16 font-bold sm:font-normal pl-8 pr-8 sm:pl-4 sm:pr-4 poly-regular leading-[2rem] sm:leading-[3.2rem]">
          Discover highly useful <br className="hidden sm:block" />
          {/* &#39;s Potential{" "} */}
          {/* <br className="hidden sm:block" /> with top handpicked tools for{" "} */}
          {/* <br className="hidden sm:block" /> */}
          <span className="text-3xl sm:text-5xl py-2 font-bold tracking-wide sm:block mt-1 sm:font-bold sm:mt-0 leading-[2rem] poly-regular sm:leading-[3rem] ">
            <span>Tools & Resources</span>
          </span>
        </h1>

        {/* <h2 className="text-center dark:text-white text-2xl sm:text-5xl poly-regular  sm:mt-16 mt-12 sm:mb-6 mb-6 font-semibold">
          Discover Tools & Resources
        </h2> */}

        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-lg mx-auto sm:mt-18 mt-12  sm:mb-24 mb-12">
          <div className="responsive-searchbar absolute inset-y-0 left-0 sm: pl-6  sm:pl-14 lg:pl-6 xl:pl-8 flex items-center pointer-events-none">
            <FaSearch className="  text-gray-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Tools & Resources"
            className="responsive-input pl-14 sm:pl-14 lg:pl-14 xl:pl-16 w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl bg-white dark:bg-white px-4 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-3 lg:py-3.5 xl:py-4 border rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-500"
          />
        </div>
        
      </div>

      <div
        className={`cards cards-container mt-8 ${
          isDarkMode
            ? "bg-[#141414] border-2  border-zinc-100/25"
            : "bg-neutral-200 border-2 border-white"
        } backdrop-blur-md shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 sm:py-12 py-8 sm:px-8`}
      >
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className={`relative card border p-4 rounded shadow flex flex-col items-center justify-center transition-all duration-300 ${
                isDarkMode ? "bg-black text-white" : "bg-white text-black"
              } text-center group`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="text-xl font-bold mb-4">{card.title}</h2>
              <p>{card.content}</p>

              {/* Developer Mode text */}
              {card.id === 5 ||
                (card.id >= 7 && card.id <= 33 && (
                  <div className="absolute inset-0 flex items-center justify-center cursor-not-allowed bg-zinc-800 bg-opacity-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#93e003] text-lg font-bold">
                      Activating soon!
                    </span>
                  </div>
                ))}
            </a>
          ))
        ) : (
          <div className=" text-center justify-center">No results found</div>
        )}
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition-colors duration-300 z-[9999] ${
            isDarkMode ? "bg-gray-800 text-white" : " text-black"
          } hover:bg-opacity-90`}
        >
          <GoArrowUp size={24} />
        </button>
      )}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};
export default Home;
