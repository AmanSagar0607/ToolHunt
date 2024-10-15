import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";
import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Skeleton from "../../components/Skeleton";
// import { BsStars } from "react-icons/bs";

const Nocode = () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const resources = [
    {
      id: 1,
      title: "Bubble",
      description: "A visual programming platform that allows anyone to build web apps without coding.",
      link: "https://bubble.io",
      avatar: "https://bubble.io/blog/content/images/size/w100/2020/02/ghost-5.png",
    },
    {
      id: 2,
      title: "Webflow",
      description: "A no-code platform for building visually stunning websites.",
      link: "https://webflow.com",
      avatar: "https://pbs.twimg.com/profile_images/1709992260694380544/IpabLWL7_400x400.jpg",
    },
    {
      id: 3,
      title: "Airtable",
      description: "A powerful database tool that makes it easy to organize anything.",
      link: "https://www.airtable.com",
      avatar: "https://pbs.twimg.com/profile_images/1810464379055599617/AdJlWCXS_400x400.jpg",
    },
    {
      id: 4,
      title: "Zapier",
      description: "A tool that connects your apps and automates workflows.",
      link: "https://zapier.com",
      avatar: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
    },
    {
      id: 5,
      title: "Thunkable",
      description: "A no-code platform to build native mobile apps.",
      link: "https://thunkable.com",
      avatar: "https://pbs.twimg.com/profile_images/1090362497800925184/K7nLalAU_400x400.jpg",
    },
    {
      id: 6,
      title: "Glide",
      description: "Build apps from Google Sheets without coding.",
      link: "https://www.glideapps.com",
      avatar: "https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-32ff6ecd-37d0-4d40-b57b-c161ad77cf70.jpg%3Falt%3Dmedia%26token%3D091d987c-f421-4962-9c94-1883b2fd0d6f",
    },
    {
      id: 7,
      title: "Carrd",
      description: "A simple, free platform for building fully responsive one-page sites.",
      link: "https://carrd.co",
      avatar: "https://pbs.twimg.com/profile_images/1235640439786663937/wugr3yK0_400x400.jpg",
    },
    {
      id: 8,
      title: "Adalo",
      description: "A platform to create powerful, custom mobile and web apps.",
      link: "https://www.adalo.com",
      avatar: "https://pbs.twimg.com/profile_images/1146051540802818049/OT6-JUhc_400x400.png",
    },
    {
      id: 9,
      title: "Softr",
      description: "Build custom apps and portals on top of Airtable.",
      link: "https://www.softr.io",
      avatar: "https://pbs.twimg.com/profile_images/1402426282600710152/5oq9jQQL_400x400.jpg",
    },
    {
      id: 10,
      title: "Outgrow",
      description: "Create interactive content such as calculators, quizzes, and more.",
      link: "https://outgrow.co",
      avatar: "https://pbs.twimg.com/profile_images/1093595939946852355/tDRx1S48_400x400.jpg",
    },
    {
      id: 11,
      title: "Landbot",
      description: "Create chatbots without coding.",
      link: "https://landbot.io",
      avatar: "https://pbs.twimg.com/profile_images/1659588180494917633/tOigsylQ_400x400.jpg",
    },
    {
      id: 12,
      title: "Notion",
      description: "A cart platform to create high-converting sales funnels without coding.",
      link: "https://makewithnotion.com/",
      avatar: "https://pbs.twimg.com/profile_images/1843300967082508288/QnIhb2jI_400x400.jpg",
    },
      
    {
      id: 13,
      title: "Voiceflow",
      description: "Build chat and voice assistants without coding.",
      link: "https://www.voiceflow.com",
      avatar: "https://pbs.twimg.com/profile_images/1770088656230916096/bny49PuI_400x400.jpg",
    },
    {
      id: 14,
      title: "Pory",
      description: "Build apps using Airtable and Google Sheets.",
      link: "https://pory.io",
      avatar: "https://pbs.twimg.com/profile_images/1775335865021272064/SQL2l0AV_400x400.jpg",
    },
    {
      id: 15,
      title: "NocodeHQ",
      description: "A platform that provides resources and tools for no-code development.",
      link: "https://nocodehq.com",
      avatar: "https://pbs.twimg.com/profile_images/1177599887615123456/UDi3_5vq_400x400.jpg",
    },
    {
      id: 16,
      title: "Memberstack",
      description: "Add user accounts and payments to any website.",
      link: "https://www.memberstack.com",
      avatar: "https://cdn.worldvectorlogo.com/logos/memberstack.svg",
    },
    {
      id: 17,
      title: "Mockplus",
      // description: "Create websites from Google Sheets without any coding.",
      link: "https://www.mockplus.com/",
      avatar: "https://pbs.twimg.com/profile_images/1344584213496926208/nq1caw9b_400x400.jpg",
    },
    {
      id: 18,
      title: "Userguiding",
      description: "A no-code platform for marketing teams to build and scale digital experiences.",
      link: "https://userguiding.com/",
      avatar: "https://pbs.twimg.com/profile_images/1604504839702155274/I7EbjmVG_400x400.jpg",
    },
    {
      id: 19,
      title: "Bravo Studio",
      description: "Convert your designs into native apps with no coding.",
      link: "https://www.bravostudio.app",
      avatar: "https://pbs.twimg.com/profile_images/1590019792718766083/pmlhrpWJ_400x400.jpg",
    },
    {
      id: 20,
      title: "Tilda",
      description: "A website builder that offers a wide range of design options.",
      link: "https://tilda.cc",
      avatar: "https://static.tildacdn.com/tild3935-3966-4237-a163-623363626162/logoblackontranspare.png",
    },
      
];

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
              href="/nocode"
              className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
            >
              <span className="no-underline">No code</span>
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
            No code {" "}
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

export default Nocode;
