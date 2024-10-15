import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";
import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Skeleton from "../../components/Skeleton";
// import { BsStars } from "react-icons/bs";

const Backgrounds = () => {
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const resources = [
    {
      id: 1,
      title: "Tabbied",
      description: "Doodle with generated patterns",
      link: "https://tabbied.com",
      avatar: "https://tabbied.com/_next/image?url=%2Fimages%2Flogo_tabbied_v3.svg&w=64&q=75",
    },
    {
      id: 2,
      title: "Durves",
      // description: "Our sponsor",
      link: "https://www.durves.com/",
      avatar: "https://pbs.twimg.com/profile_images/1672452070954217472/OV7Wl9g6_400x400.jpg",
    },
    {
      id: 3,
      title: "BGJar",
      description: "Free SVG background generator for your websites, blogs, and apps",
      link: "https://bgjar.com",
      avatar: "https://bgjar.com/bgjar.svg",
    },
    {
      id: 4,
      title: "Softr SVG",
      description: "Multicolor CSS gradients, JPG downloads, 100% free",
      link: "https://www.softr.io/tools/svg-shape-generator",
      avatar: "https://pbs.twimg.com/profile_images/1402426282600710152/5oq9jQQL_400x400.jpg",
    },
    {
      id: 5,
      title: "Pattern Pad",
      description: "Multicolor CSS gradients, JPG downloads, 100% free",
      link: "https://patternpad.com/",
      avatar: "https://apcdouatoejrvwoqevfc.supabase.co/storage/v1/object/public/logos/logos/409.png",
    },
    {
      id: 6,
      title: "WowPatterns",
      description: "Discover our 500+ best quality vector and seamless patterns. Latest free vector images and backgrounds with Ai and EPS file formats",
      link: "https://wowpatterns.com",
      avatar: "https://scontent.fbho6-1.fna.fbcdn.net/v/t39.30808-1/433732011_959301545901582_4742315470583632436_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=gHSckxH7y5kQ7kNvgHDT3mm&_nc_ht=scontent.fbho6-1.fna&_nc_gid=AlFyOh6JtzCOIyk-2i7ESp5&oh=00_AYCIhB61PFVuHPYZ6_bq9RReb4Ci-lIuijGIm4KYVE4qog&oe=67141695",
    },
    {
      id: 7,
      title: "Ffflux",
      description: "Explore a beautifully curated selection of cool backgrounds that you can add to blogs, websites, desktop, etc.",
      link: "https://www.fffuel.co/ffflux/",
      avatar: "https://pbs.twimg.com/profile_images/1671316196119945216/GTcKehdM_400x400.jpg",
    },
    {
      id: 8,
      title: "Magicpattern",
      description: "Explore a beautifully curated selection of cool backgrounds that you can add to blogs, websites, desktop, etc.",
      link: "https://www.magicpattern.design/tools/mesh-gradients",
      avatar: "https://pbs.twimg.com/profile_images/1387456092653903874/5FGL8ozv_400x400.jpg",
    },
    {
      id: 9,
      title: "Patterninja",
      description: "Combine images from our free library or use your own. Download in high resolution.",
      link: "https://patterninja.com",
      avatar: "https://www.bookmarks.design/media/image/patterninja.jpg",
    },
    {
      id: 10,
     title: "Vackground",
      link: "https://vackground.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1468135779062804481/3RR9Qjni_400x400.jpg",
    },
    // {
    //   id: 9,
    //   title: "The Pattern Library",
    //   description: "Free patterns for the people, by the people. Created by the community.",
    //   link: "https://thepatternlibrary.com",
    //   avatar: "https://thepatternlibrary.com/logo.svg",
    // },
    // {
    //   id: 10,
    //   title: "Subtle Patterns",
    //   description: "Free high quality patterns for your next web project.",
    //   link: "https://subtlepatterns.com",
    //   avatar: "https://subtlepatterns.com/logo.svg",
    // },
    // {
    //   id: 11,
    //   title: "Hero Patterns",
    //   description: "A collection of repeatable SVG background patterns for you to use on your web projects.",
    //   link: "https://heropatterns.com",
    //   avatar: "https://heropatterns.com/logo.svg",
    // },
    {
      id: 11,
      title: "Blobmaker",
      description: "Make organic SVG shapes for your next design.",
      link: "https://blobmaker.app",
      avatar: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgNzIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BcnRib2FyZCA4IENvcHkgMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJBcnRib2FyZC04LUNvcHktMyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEzLjk4MDE5MDIsNDkuNjcxMTgxMyBDNi41MzI2MzgxNCwzNS44MDA0ODAyIDI1LjEzMTgxNTgsNi4wMzc2MTE2MiA0MS44Nzg5NTY4LDUuMDI2ODc4MzYgQzU4LjYyNjA5NzcsNC4wMTYxNDUxMSA3My41MjEyMDE5LDMxLjc1NzU0NzIgNjQuMjIxNjEzLDQ2LjYzODk4MTUgQzU0LjkyMjAyNDIsNjEuNTIwNDE1OCAyMS40Mjc3NDIzLDYzLjU0MTg4MjMgMTMuOTgwMTkwMiw0OS42NzExODEzIFoiIGlkPSJTaGFwZS1Db3B5LTYiIGZpbGw9IiNGRjk5MzMiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik00MC4xNzkxNTgyLDM1LjYzNzQwNTEgQzQ1LjgxMTg5NTksNDIuMTQyNzk4IDU0Ljc0MDkzNzYsNDYuNTc3MzEyOCA1NS42ODE4OTM5LDUxLjg4ODY3NzcgQzU2LjYyMjg1MDIsNTcuMjAwMDQyNSA0OS41NzU3MjExLDYzLjM4ODI1NzQgNDIuMzA5MjM4Nyw2NS40OTUxMjc3IEMzNS4wNDI3NTY0LDY3LjYwMTk5NzkgMjcuNTU2OTIwNyw2Ni42Mjc1MjM2IDIxLjI5MTE3NTcsNjMuMTk2NDkxIEMxNS4wMjU0MzA3LDU5Ljc2NTQ1ODQgOS45Nzk3NzYzNiw1My44Nzc4Njc0IDcuMTg5ODczNTYsNDYuOTU3NjIwNCBDNC4zOTk5NzA3Niw0MC4wMzczNzMzIDMuODY1ODE5NTMsMzEuMDg0NDcwMSA4LjAyMjM5MTQ1LDI0LjkxNjAwMjMgQzEyLjE3ODk2MzQsMTguNzQ3NTM0NiAyMS4wMjYyNTg0LDE1LjM2MzUwMjMgMjYuNjE4MTIyNywxNy45NTk2MjE3IEMzMi4yMDk5ODcsMjAuNTU1NzQxMSAzNC41NDY0MjA2LDI5LjEzMjAxMjIgNDAuMTc5MTU4MiwzNS42Mzc0MDUxIiBpZD0iU2hhcGUtQ29weS01IiBmaWxsPSIjRkYwMDY2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNNTIuNjgyNDQwMiw0My45OTIgQzUyLjY4MjQ0MDIsNTEuMzg0IDQ2LjI1MDQ0MDIsNTQuNiAzOS4yOTA0NDAyLDU0LjYgTDIyLjc3ODQ0MDIsNTQuNiBMMjIuNzc4NDQwMiwxNy4wMTYgTDM5LjA1MDQ0MDIsMTcuMDE2IEM0Mi42MDI0NDAyLDE3LjAxNiA0Ni4yNTA0NDAyLDE4LjE2OCA0OC41NTQ0NDAyLDIwLjUyIEM1MC4xMzg0NDAyLDIyLjE1MiA1MS4wNTA0NDAyLDI0LjUwNCA1MS4wNTA0NDAyLDI2Ljk1MiBDNTEuMDUwNDQwMiwzMC43NDQgNDguNjUwNDQwMiwzMy41MjggNDUuMDUwNDQwMiwzNS4wMTYgTDQ1LjA1MDQ0MDIsMzUuMTYgQzQ5Ljg1MDQ0MDIsMzUuOTI4IDUyLjY4MjQ0MDIsMzkuNDggNTIuNjgyNDQwMiw0My45OTIgWiBNNDEuNjQyNDQwMiwyOC40ODggQzQxLjY0MjQ0MDIsMjYuMTg0IDM5Ljk2MjQ0MDIsMjUuMTI4IDM3LjMyMjQ0MDIsMjUuMTI4IEwzMS45NDY0NDAyLDI1LjEyOCBMMzEuOTQ2NDQwMiwzMS44OTYgTDM3LjQxODQ0MDIsMzEuODk2IEM0MC4xNTQ0NDAyLDMxLjg5NiA0MS42NDI0NDAyLDMwLjYgNDEuNjQyNDQwMiwyOC40ODggWiBNNDMuMjI2NDQwMiw0Mi44ODggQzQzLjIyNjQ0MDIsNDAuNDg4IDQxLjIxMDQ0MDIsMzkuMzg0IDM4LjkwNjQ0MDIsMzkuMzg0IEwzMS45NDY0NDAyLDM5LjM4NCBMMzEuOTQ2NDQwMiw0Ni40NCBMMzguOTU0NDQwMiw0Ni40NCBDNDEuMzU0NDQwMiw0Ni40NCA0My4yMjY0NDAyLDQ1LjI4OCA0My4yMjY0NDAyLDQyLjg4OCBaIiBpZD0iQi1Db3B5IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==",
    },
    // {
    //   id: 13,
    //   title: "CSS Gradient",
    //   description: "As a free CSS gradient generator tool, this website lets you create a colorful gradient background.",
    //   link: "https://cssgradient.io",
    //   avatar: "https://cssgradient.io/logo.svg",
    // },
    // {
    //   id: 14,
    //   title: "SVG Backgrounds",
    //   description: "Customizable SVG patterns and background designs for websites and blogs.",
    //   link: "https://svgbackgrounds.com",
    //   avatar: "https://svgbackgrounds.com/logo.svg",
    // },
    // {
    //   id: 15,
    //   title: "Blend",
    //   description: "Create and customize beautiful CSS3 gradients.",
    //   link: "https://blend.com",
    //   avatar: "https://blend.com/logo.svg",
    // },
    {
      id: 12,
      title: "ColorSpace",
      description: "Here you can find the perfect matching color scheme for your next project! Generate nice color palettes, color gradients and much more.",
      link: "https://mycolor.space",
      avatar: "https://mycolor.space/img/color-space-logo.png",
    },
    // {
    //   id: 17,
    //   title: "Pngtree",
    //   description: "Your top source for free PNG images, vectors, graphics, PSDs, icons, and more.",
    //   link: "https://pngtree.com",
    //   avatar: "https://pngtree.com/logo.svg",
    // },
    // {
    //   id: 18,
    //   title: "Tabbied",
    //   description: "Create and customize beautiful doodles with generated patterns.",
    //   link: "https://tabbied.com",
    //   avatar: "https://tabbied.com/logo.svg",
    // },
    // {
    //   id: 19,
    //   title: "Doodle",
    //   description: "Create custom doodles and patterns for your designs.",
    //   link: "https://doodle.com",
    //   avatar: "https://doodle.com/logo.svg",
    // },
    // {
    //   id: 20,
    //   title: "Charcodesign",
    //   description: "Discover beautiful designs and patterns for your next project.",
    //   link: "https://charcodesign.com",
    //   avatar: "https://charcodesign.com/logo.svg",
    // },
     
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
              href="/backgrounds"
              className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
            >
              <span className="no-underline">Backgrounds</span>
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
            Backgrounds{" "}
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
    ? Array(12)
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

export default Backgrounds;
