import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";
import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Skeleton from "../../components/Skeleton";
// import { BsStars } from "react-icons/bs";

const Tailwind = () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const resources = [
    {
      id: 1,
      title: "Tailwind CSS",
      description: "Ready-to-use Tailwind CSS blocks for your web projects.",
      link: "https://tailwindcss.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
    },

    {
      id: 2,
      title: "Tailwind UI",
      description:
        "Beautiful UI components, crafted by the creators of Tailwind CSS.",
      link: "https://tailwindui.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg",
    },

    {
      id: 3,
      title: "Headless UI",
      description:
        "Completely unstyled, fully accessible UI components for Tailwind CSS.",
      link: "https://headlessui.dev",
      avatar:
        "https://cdn.brandfetch.io/idA1wrZZWa/w/180/h/180/theme/dark/logo.png?k=id64Mup7ac&t=1718597486463?t=1718597486463",
    },
    {
      id: 4,
      title: "Meraki UI",
      description: "Beautiful UI components based on Tailwind CSS.",
      link: "https://merakiui.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1682678907667881986/90NcqKIK_400x400.jpg",
    },
    {
      id: 5,
      title: "DaisyUI",
      description: "The most popular component library for Tailwind CSS.",
      link: "https://daisyui.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1728154853753384960/_OVHQkhh_400x400.jpg",
    },
    {
      id: 6,
      title: "TailwindComponents",
      description:
        "A community-contributed collection of components and templates.",
      link: "https://tailwindcomponents.com",
      avatar: "https://avatars.githubusercontent.com/u/20172349?s=200&v=4",
    },
    {
      id: 7,
      title: "Tailwind Toolbox",
      description: "Templates, components, and resources for Tailwind CSS.",
      link: "https://www.tailwindtoolbox.com",
      avatar: "https://avatars.githubusercontent.com/u/43570497?v=4",
    },
    {
      id: 8,
      title: "Hypercolor",
      description:
        "A curated collection of beautiful gradients made with Tailwind CSS.",
      link: "https://ui.shadcn.com/",
      avatar: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    },
    {
      id: 9,
      title: "Flowbite",
      description:
        "Components and interactive elements built with Tailwind CSS.",
      link: "https://flowbite.com",
      avatar:
        "https://yt3.googleusercontent.com/KVOnT6xUvsO0KMt6RGrjT6ZPF7Z0JzJ0mMRAFIo19l4SLa_RctjrxWpLhiGsjvCiX4faB9y3WA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 10,
      title: "Kutty",
      description:
        "A Tailwind CSS component library that focuses on accessibility.",
      link: "https://kutty.netlify.app",
      avatar:
        "https://pbs.twimg.com/profile_images/1309388427645710336/3daaVUv7_400x400.jpg",
    },
    {
      id: 11,
      title: "Treact",
      description: "React UI templates and components built with Tailwind CSS.",
      link: "https://treact.owaiskhan.me",
      avatar:
        "https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg",
    },
    // {
    //   id: 12,
    //   title: "Tailwind Starter Kit",
    //   description: "A beautiful extension for Tailwind CSS with ready-to-use templates.",
    //   link: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation",
    //   avatar:
    //     "https://s3.amazonaws.com/creativetim_bucket/products/99/thumb/opt_tailwindcss_thumbnail.jpg",
    // },
    // {
    //   id: 13,
    //   title: "Windstrap",
    //   description: "Bootstrap-inspired components built with Tailwind CSS.",
    //   link: "https://windstrap.dev",
    //   avatar:
    //     "https://windstrap.dev/assets/favicon/favicon-32x32.png",
    // },
    {
      id: 14,
      title: "Tailkit",
      description: "UI components, layouts, and templates using Tailwind CSS.",
      link: "https://tailkits.com/",
      avatar:
        "https://pbs.twimg.com/profile_images/1583054336871268353/NEvaayaV_400x400.png",
    },
    // {
    //   id: 15,
    //   title: "Twemoji Awesome",
    //   description: "Use Twitter Emojis as icons in your Tailwind CSS projects.",
    //   link: "https://twemoji-awesome.vercel.app",
    //   avatar:
    //     "https://twemoji-awesome.vercel.app/favicon.ico",
    // },
    {
      id: 16,
      title: "Tailwind Builder",
      description: "Create Tailwind templates in minutes and more.",
      link: "https://shuffle.dev/tailwind",
      avatar:
        "https://pbs.twimg.com/profile_images/1658406561767727105/fGlkxw03_400x400.png",
    },
    {
      id: 17,
      title: "Tailwind Awesome",
      description: "A curated list of awesome Tailwind CSS resources.",
      link: "https://tailwindawesome.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1367264150129233921/1iI-8llb_400x400.jpg",
    },
    {
      id: 18,
      title: "Sailboat UI",
      description: "A quick reference guide for Tailwind CSS classes.",
      link: "https://sailboatui.com/",
      avatar:
        "https://pbs.twimg.com/profile_images/1608418712708878336/KK8nYdRy_400x400.png",
    },
    {
      id: 19,
      title: "PostSrc Tailwind",
      description:
        "Learn Tailwind CSS by example, featuring UI components and patterns.",
      link: "https://postsrctailwind.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1352142026242854913/7uwfNb3D_400x400.png",
    },
    // {
    //   id: 20,
    //   title: "Tailwind Builder",
    //   description: "Drag-and-drop page builder for Tailwind CSS projects.",
    //   link: "https://tailwind.build",
    //   avatar:
    //     "https://tailwind.build/favicon-32x32.png",
    // },
  ];

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
              href="/tailwindcss"
              className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
            >
              <span className="no-underline">Tailwind</span>
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
              Tailwind CSS{" "}
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
        className={`cards-container ${
          isDarkMode ? "bg-[#141414] text-white" : "bg-[#F5F5F4] text-black"
        } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0 py-8`}
      >
        {isLoading
          ? Array(16)
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
                      <span className="indicator-item badge pb-0 sm:pb-1">
                        new
                      </span>
                    </div>
                  </div>
                )}
                <img
                  src={resource.avatar}
                  alt={resource.title}
                  className="w-14 h-auto rounded-full mt-2 mb-3"
                />
                <h2 className="text-2xl font-semibold mt-2 mb-2">
                  {resource.title}
                </h2>
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

export default Tailwind;
