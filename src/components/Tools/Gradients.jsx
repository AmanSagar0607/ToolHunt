import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";
import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Skeleton from "../../components/Skeleton";
// import { BsStars } from "react-icons/bs";

const Gradients = () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const resources = [
    {
      id: 1,
      title: "Monopo",
      link: "https://monopo.vn",
      avatar:
        "https://pbs.twimg.com/profile_images/1440938719515717633/zbITPgE1_400x400.jpg",
    },
     
    {
      id: 2,
      title: "Super Undesigner",
      description: "A collection of beautiful gradients for inspiration",
      link: "https://superundesigner.com",
      avatar: "https://superdesigner.co/logo.svg",
    },
    {
      id: 3,
      title: "Gradient Magic",
      description: "Beautiful and simple UI for generating web gradients.",
      link: "https://www.gradientmagic.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1389723696428994560/_91E6Oxg_400x400.jpg",
    },
    {
      id: 4,
      title: "Blend",
      description: "Pure CSS Code, JPG Download, Open Source!",
      link: "https://multicolored-gradients.com",
      avatar: "https://www.bookmarks.design/media/image/blend.jpg",
    },
    {
      id: 5,
      title: "Colorsinspo",
      description:
        "Thousands of beautiful color palettes you can use directly with one click.",
      link: "https://colorsinspo.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1212030355831586816/MRjTj8nX_400x400.jpg",
    },
    {
      id: 6,
      title: "UiGradients",
      description:
        "A handpicked collection of beautiful color gradients for designers and developers.",
      link: "https://uigradients.com",
      avatar: "https://www.bookmarks.design/media/image/uigradients.jpg",
    },
    {
      id: 7,
      title: "Web Gradients",
      description:
        "A free collection of 180 linear gradients that you can use as content backdrops in any part of your website.",
      link: "https://webgradients.com",
      avatar: "https://webgradients.com/img/other/logos/webgradients_logo.png",
    },
    {
      id: 8,
      title: "Mesh.Y",
      description:
        "Hand-crafted collection of mesh gradients for designers and developers.",
      link: "https://meshgradient.in",
      avatar:
        "https://pbs.twimg.com/profile_images/1491010071429484546/2Fwqlpu1_400x400.jpg",
    },
    {
      id: 9,
      title: "Zeusjones",
      description:
        "Hand-crafted collection of mesh gradients for designers and developers.",
      link: "https://zeusjones.com",
      avatar:
        "https://scontent.cdninstagram.com/v/t51.2885-19/61863783_460990344702464_3024560564488634368_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=104&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=e7tD2ViX7BoQ7kNvgGFfp5O&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYAszXeEAF8OIx8ZEs8Cv_0x2V50F45lMMoSneoDPa1IMg&oe=67140B10",
    },
    // { id: 18, title: "SaaS Pages", link: "https://saaspages.xyz" }, design pattern
    {
      id: 10,
      title: "Thirst",
      link: "https://thirstcraft.com",
      avatar:
        "https://scontent.cdninstagram.com/v/t51.2885-19/359696683_1011550263534412_293599298604543906_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=103&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=QP7y4RJJzSUQ7kNvgFPoo9W&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDCI8RB2h2TmBis6gi-QwEakALH3JiDBWraUxWJoKpsQA&oe=67141443",
    },
    {
      id: 11,
      title: "PrismData",
      link: "https://www.prismdata.com",
      avatar:
        "https://cdn.prod.website-files.com/64af3ca4f403c0f96fee794f/64af3ca4f403c0f96fee796f_IconMarkWhite.svg",
    },
    {
      id: 12,
      title: "Coolhue",
      link: "https://webkul.github.io/coolhue/",
      avatar: "https://webkul.github.io/coolhue/images/coolhue-logo.png",
    },
    {
      id: 13,
      title: "Gradient Hunt",
      link: "https://gradienthunt.com",
     avatar:
        "https://pbs.twimg.com/profile_images/1010766928217018368/1cP155mD_400x400.jpg"
    },
    {
      id: 14,
      title: "Eggradients",
      link: "https://www.eggradients.com",
      avatar:
        "https://cdn.prod.website-files.com/5a9423a3f702750001758d4f/64e3a52fb2a4894b1a90c670_Logo-p-500.png",
    },
    {
      id: 15,
      title: "Rayst",
      link: "https://ray.st",
      avatar:
        "https://pbs.twimg.com/profile_images/1604310093654134784/tm7inOZW_400x400.jpg",
    },
    {
      id: 16,
      title: "Vackground",
      link: "https://vackground.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1468135779062804481/3RR9Qjni_400x400.jpg",
    },
    {
      id: 17,
      title: "Design gradients",
      link: "https://www.designgradients.com",
      avatar:
        "https://ph-files.imgix.net/919d952c-5743-4b4b-b881-50f572ad466a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1",
    },
    {
      id: 18,
      title: "Gradientos",
      link: "https://www.gradientos.app",
      avatar:
        "https://ph-files.imgix.net/dc51b4ed-5869-4f14-a535-ff18e17ff618.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1",
    },
    {
      id: 20,
      title: "Charcodesign",
      link: "https://www.charco.design/",
      avatar:
        "https://scontent.cdninstagram.com/v/t51.2885-19/272823672_1127014884793732_8422673432899473257_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=105&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=n22qWIZ6iF4Q7kNvgEz9_l3&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYAlIUvI1_TQHvyiPWx72HIGtkGDn9yA4H5_o-AbjHrcHA&oe=67141C97",
    },
    {
      id: 20,
      title: "Grabient",
      description: "Get 90 high-quality gradient wallpapers in 5K resolution",
      link: "https://www.grabient.com",
      avatar: "https://www.bookmarks.design/media/image/grabient.jpg",
    },
     
    // { id: 20, title: "Tailwind UI", link: "https://tailwindui.com" },
    // {
    //   id: 21,
    //   title: "SaaSLandingPage",
    //   link: "https://saaslandingpage.com/",
    //   avatar:'' },
    // {
    //   id: 22,
    //   title: "Screenshot Inspiration",
    //   link: "https://screenshotinspiration.com",
    // },
    // { id: 23, title: "LaudableApps", link: "https://laudableapps.com" },
    // { id: 24, title: "Flim", link: "https://flim.com" },
    // Add more items as needed
  ];
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change this delay as needed
  }, []);

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
              href="/gradients"
              className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
            >
              <span className="no-underline">Gradients</span>
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
          <span className="text-3xl sm:text-5xl sm:mt-28 mt-24 font-bold sm:font-normal pl-4 pr-4 poly-regular leading-[2rem] sm:leading-[3.2rem]">
            <span>
              Gradients{" "}
              {/* <span className="inline-block">
                <BsStars className="text-yellow-400" />
              </span>{" "} */}
            </span>
          </span>
        </h1>

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
  className={`cards cards-container ${
    isDarkMode ? "bg-[#141414] text-white" : "bg-[#F5F5F4] text-black"
  } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0 py-8`}
>
  {isLoading
    ? Array(20)
        .fill(0)
        .map((_, index) => <Skeleton key={index} />)
    : filteredResources.length > 0
    ? filteredResources.map((resource) => (
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
          <h2 className="text-2xl font-semibold mt-5">{resource.title}</h2>
        </a>
      ))
    : !isLoading && (
        <div className="text-center justify-center">No results found</div>
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

export default Gradients;
