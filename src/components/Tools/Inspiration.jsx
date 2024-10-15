import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";
import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import { BsStars } from "react-icons/bs";

import Skeleton from "../../components/Skeleton";

const Inspiration = () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const resources = [
    {
      id: 1,
      title: "Design Munk",
      link: "https://designmunk.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1658848822653583364/oKw06bLO_400x400.jpg",
    },
      

    {
      id: 2,
      title: "Designspells",
      link: "https://www.designspells.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1657398365355933697/TbnjwWlF_400x400.jpg",
    },
     
    {
      id: 3,
      title: "Mobbin",
      link: "https://awwwards.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1799365117509066752/KgIhRUJI_400x400.png",
    },

    {
      id: 4,
      title: "Dribbble",
      link: "https://dribbble.com",
      avatar:
        "https://seeklogo.com/images/D/dribbble-logo-143FF96D65-seeklogo.com.png",
    },
    {
      id: 5,
      title: "Refero",
      link: "https://godly.website",
      avatar:
        "https://pbs.twimg.com/profile_images/1377024314386567174/mVAhB1KM_400x400.jpg",
    },
    {
      id: 6,
      title: "Behance",
      link: "https://behance.net",
      avatar:
        "https://seeklogo.com/images/B/behance-logo-1373E40919-seeklogo.com.png",
    },
    {
      id: 7,
      title: "Nicelydone",
      link: "https://nicelydone.club",
      avatar:
        "https://cdn.prod.website-files.com/65b0fe98c43e62a2d4757571/65b11f5fb01bd861943a9024_64f0c83aef3b01c1cd997888_foT2UL5DmsvatgtP606oUIlBpVkP_XMBlbnw-haosnI.webp",
    },
    {
      id: 8,
      title: "Awwwards",
      link: "https://awwwards.com",
      avatar:
        "https://cdn.ui-tools.com/Content/images/0e9757b2-awwwards.jpg?width=210",
    },
    {
      id: 9,
      title: "Mobbin",
      link: "https://awwwards.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1799365117509066752/KgIhRUJI_400x400.png",
    },
    {
      id: 10,
      title: "One Page Love",
      link: "https://onepagelove.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1526509554703511553/-VT3TJ7f_400x400.jpg",
    },
    {
      id: 11,
      title: "Collect UI",
      link: "https://collectui.com",
      // discription: 'Collect UI is a collection of design resources.',
      avatar:
        "https://pbs.twimg.com/profile_images/804612529003626496/GO8zVitU_400x400.jpg",
    },
      
    {
      id: 12,
      title: "Pixelfika",
      link: "https://pixelfika.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1635083738089684992/7yUl48b5_400x400.jpg",
    },
    // { id: 9, title: "UI Movement", link: "https://uimovement.com" },
    // { id: 10, title: "httpster", link: "https://httpster.net", avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAWUlEQVR4AWP4DwHvvKAMmEBbEarAb4knqALzI/6jCqhfRBXYafMfVcBtI6rADcX/qAIJU1AF3jFAwEaIAAx8VP+PKjClDU1A8QmqwFqv/6gCNjtRBT7C3AoAYuPpB/a0bgsAAAAASUVORK5CYII=" },
    {
      id: 13,
      title: "Design Vault",
      link: "https://designvault.io",
      // discription: 'Collect UI is a collection of design resources.',
      avatar:
        "https://pbs.twimg.com/profile_images/1620858960294060032/M8lWxCjQ_400x400.png",
    },
    {
      id: 14,
      title: "FWA",
      link: "https://thefwa.com",
      avatar: "https://brandeps.com/logo-download/F/FWA-logo-vector-01.svg",
    },
    // {
    //   id: 12,
    //   title: "JenSimmons",
    //   link: "https://jensimmons.com",
    // },
    // { id: 13, title: "iOS Icon Gallery", link: "https://iosicongallery.com" },
    // { id: 14, title: "Color Wander", link: "https://colorwander.com" },
    {
      id: 15,
      title: "scrnshts",
      link: "https://scrnshts.club",
      avatar:
        "https://pbs.twimg.com/profile_images/1114938416754503680/6JHVlDkl_400x400.png",
    },
    // { id: 16, title: "Product Hunt", link: "https://producthunt.com" },
    {
      id: 16,
      title: "Muzli",
      link: "https://muz.li",
      avatar:
        "https://pbs.twimg.com/profile_images/659710386069897216/C5GLKeIW_400x400.png",
    },
    {
      id: 17,
      title: "Refero",
      link: "https://refero.design",
      avatar:
        "https://pbs.twimg.com/profile_images/1625629997674164225/DEv4c2wQ_400x400.png",
    },

    {
      id: 18,
      title: "Mexi Best of",
      link: "https://maxibestof.one",
      avatar:
        "https://pbs.twimg.com/profile_images/1360886758569897986/2V-Zto5G_400x400.jpg",
    },
    {
      id: 19,
      title: "Minimal Gallery",
      link: "https://minimal.gallery",
      avatar:
        "https://pbs.twimg.com/profile_images/1589762862569996289/i_QJj1tW_400x400.jpg",
    },
    {
      id: 20,
      title: "Browsing Mode",
      link: "https://browsingmode.com",
      avatar:
        "https://ph-files.imgix.net/d7a8632d-f1e6-4c4e-ab40-8da826c09ee3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1",
    },
    {
      id: 21,
      title: "Brutalweb",
      link: "https://brutalweb.xyz",
      avatar:
        "https://pbs.twimg.com/profile_images/378800000666132483/3174361484899241c1c01ff0127622f4_400x400.jpeg",
    },
    {
      id: 22,
      title: "Saaspo",
      link: "https://www.saaspo.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1603045786052399105/zVycPNGw_400x400.jpg",
    },
    {
      id: 23,
      title: "Saasframe",
      link: "https://www.saasframe.io",
      avatar:
        "https://pbs.twimg.com/profile_images/1629985376763781120/2RJ_780-_400x400.png",
    },
    {
      id: 24,
      title: "Commercecream",
      link: "https://commercecream.com",
      avatar:
        "https://pbs.twimg.com/profile_images/959529298049884160/pbyBIm6S_400x400.jpg",
    },
    // { id: 18, title: "SaaS Pages", link: "https://saaspages.xyz" }, design pattern
    // { id: 19, title: "Email Love", link: "https://emaillove.com" },
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
    }, 3000); // Change this delay as needed
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
      <div className="breadcrumbs fixed flex justify-between items-center sm:mt-26 mt-24 sm:pl-8 lg:pl-40  ml-2 pl-6 pr-6 sm:pr-36">
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
              href="/inspiration"
              className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
            >
              <span className="no-underline">Inspiration</span>
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
              Inspiration{" "}
              <span className="inline-block">
                {/* <BsStars className="text-yellow-400" /> */}
              </span>{" "}
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
  className={`cards-container ${
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
          } relative`}
        >
          {/* Conditional Indicator */}
          {resource.id === 1 && (
            <div className="absolute -top-4 right-2">
              <div className="indicator">
                <span className="indicator-item badge pb-0 sm:pb-1">new</span>
              </div>
            </div>
          )}
          <img
            src={resource.avatar}
            alt={resource.title}
            className="w-14 h-auto rounded-full mt-2 mb-3"
          />
          <h2 className="text-2xl font-semibold mt-2 mb-2">{resource.title}</h2>
        </a>
      ))
    : !isLoading && (
        <div className="text-center w-full">No results found</div>
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

export default Inspiration;
