import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";
import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Skeleton from "../../components/Skeleton";
// import { BsStars } from "react-icons/bs";

const Colors = () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const resources = [
    {
      id: 1,
      title: "Colorinspo",
      link: "https://colorsinspo.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1212030355831586816/MRjTj8nX_400x400.jpg",
    },
    {
      id: 2,
      title: "Color Hunt",
      link: "https://colorhunt.co",
      avatar:
        "https://pbs.twimg.com/profile_images/630338320258609152/yqPjmY4D_400x400.png",
    },
    {
      id: 3,
      title: "Coolors",
      link: "https://coolors.co",
      avatar:
        "https://pbs.twimg.com/profile_images/1563618242484207617/F0FMwKmT_400x400.jpg",
    },
    {
      id: 4,
      title: "Colorlisa",
      link: "https://colorlisa.com",
      avatar:
        "https://scontent.fidr1-1.fna.fbcdn.net/v/t39.30808-6/326567070_1568176070316261_4953735278396960283_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0nE5AdRs_t4Q7kNvgGPyBrx&_nc_ht=scontent.fidr1-1.fna&_nc_gid=AeyH4gSS3kaTZVGaDWFB8i2&oh=00_AYDyT_wfq33HjZ_IICcOM63bhUtPqyRbzve7_MQgoaMVjw&oe=6713F89E",
    },
    {
      id: 5,
      title: "Huesnap",
      link: "hhttps://www.huesnap.com",
      avatar:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/1f/e6/45/1fe645f4-3846-73d1-6462-ba6ada888a0e/AppIcon-0-1x_U007emarketing-0-0-85-220-0-5.png/246x0w.webp",
    },
    {
      id: 6,
      title: "khroma",
      link: "https://www.khroma.co",
      avatar: "https://media.theresanaiforthat.com/icons/khroma.svg?width=100",
    },
    {
      id: 7,
      title: "CSS Gradient",
      link: "https://cssgradient.io",
      avatar: "https://cssgradient.io/images/logo-55c31c59.svg",
    },
    {
      id: 8,
      title: "Colordot",
      link: "https://color.hailpixel.com",
      avatar:
        "https://color.hailpixel.com/static/ios/media/colordot-icon@2x.png",
    },
    {
      id: 9,
      title: "Picular",
      link: "https://picular.co",
      avatar:
        "https://pbs.twimg.com/profile_images/1279257277258764288/2ZULVvQc_400x400.jpg",
    },
    {
      id: 10,
      title: "Realtime Colors",
      link: "https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff&fonts=Inter-Inter",
      avatar: "https://juxtopposed.github.io/realtimecolors/images/favicon.png",
    },
    {
      id: 11,
      title: "Shadergradient",
      link: "https://www.shadergradient.co",
      avatar:
        "https://pbs.twimg.com/profile_images/1595415901675089923/c-rmNc_O_400x400.jpg",
    },
    // {
    //   id: 11,
    //   title: "Material Palette",
    //   link: "https://www.materialpalette.com",
    // },
    // { id: 12, title: "Colorinspire", link: "https://colorinspire.org" },
    {
      id: 12,
      title: "Tilda Colors",
      link: "https://tilda.cc/colors",
      avatar: "https://front.tildacdn.com/colors/colors/img/logo.png",
    },
    // { id: 14, title: "Khroma", link: "http://khroma.co" },
    // { id: 15, title: "Flat UI Colors", link: "https://flatuicolors.com" },
    {
      id: 13,
      title: "ColorSpace",
      link: "https://mycolor.space",
      avatar:
        "https://pbs.twimg.com/profile_images/904080332160458752/wyVe7uLQ_400x400.jpg",
    },
    {
      id: 14,
      title: "Colorffy",
      link: "https://colorffy.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1358123153181061120/672exRmY_400x400.jpg",
    },
    // { id: 18, title: "Colorable", link: "https://colorable.jxnblk.com" },
    // { id: 19, title: "Happy Hues", link: "https://www.happyhues.co" },
    {
      id: 15,
      title: "BrandColors",
      link: "https://brandcolors.net",
      avatar:
        "https://pbs.twimg.com/profile_images/831203080746258435/X8m4k_3Q_400x400.jpg",
    },
    {
      id: 16,
      title: "Trycolors",
      link: "https://trycolors.com",
      avatar:
        "https://yt3.googleusercontent.com/AWrriTG6vgswuGBBson2B69lXusU11CrWsjMi44gETN30QL-dLA6Q0-j6h7u8AijSKmxpIJh=s160-c-k-c0x00ffffff-no-rj",
    },
    // {
    //   id: 24,
    //   title: "Cohesive Colors",
    //   link: "https://javier.xyz/cohesive-colors",
    // },
    // { id: 25, title: "Tailwind Ink", link: "https://tailwind.ink" },
    // { id: 26, title: "Colorsandfonts", link: "https://colorsandfonts.com" },
    // {
    //   id: 27,
    //   title: "2 Color Combinations",
    //   link: "https://2colors.colorion.co",
    // },
    // { id: 28, title: "Farbvelo", link: "https://farbvelo.elastiq.ch" },
    // {
    //   id: 29,
    //   title: "Website Color Schemes",
    //   link: "https://www.sliderrevolution.com/resources/color-schemes/",
    // },
    // { id: 30, title: "Colors UI", link: "https://colorsui.com" },
    // {
    //   id: 31,
    //   title: "Mobile Palette Generator",
    //   link: "https://palettegenerator.com",
    //   avatar:'images/palettegenerator/favicon.png'
    // },

    {
      id: 17,
      title: "Hue Tools",
      link: "https://hue.tools",
      avatar:
        "https://ph-files.imgix.net/d73cb220-e0b5-4782-b3f5-1369325e273f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1",
    },
    {
      id: 18,
      title: "Adobe Color ",
      link: "https://color.adobe.com/create/color-wheel",
      avatar:
        "https://ffc-static-cdn.oobesaas.adobe.com/icons/FFC_color/1.0/96x96.png",
    },
    {
      id: 19,
      title: "ColorHuddle",
      link: "https://colorhuddle.com",
      avatar:
        "https://ph-files.imgix.net/1b2bfc68-d1a2-467b-b29c-5a7d6de020a3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1",
    },
    {
      id: 20,
      title: "Leonardo",
      link: "https://leonardocolor.io",
      avatar: "https://leonardocolor.io/Leonardo_Logo_sm.2739fe1a.svg",
    },
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
              href="/colors"
              className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
            >
              <span className="no-underline">Colors</span>
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
              Colors{" "}
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
                <h2 className="text-2xl font-semibold mt-5">
                  {resource.title}
                </h2>
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

export default Colors;
