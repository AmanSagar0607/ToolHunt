import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
// import { FaMoon } from "react-icons/fa";
// import { ImSun } from "react-icons/im";
import { VscCoffee } from "react-icons/vsc";
import { FaBars, FaTimes } from "react-icons/fa";
// import { IoMoonOutline } from "react-icons/io5";

const Landing = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode] = useState(true);
  // const [text, setText] = useState("");
  // const [index, setIndex] = useState(0);
  // const [phraseIndex, setPhraseIndex] = useState(0);
  // const [rotateIcon, setRotateIcon] = useState(false);

  // Memoize the phrases array so it doesn't change on every render
  // const phrases = useMemo(
  //   () => [
  //     "Designers & Developers",
  //     "Creating Products",
  //     // "Creating Stunning Designs",
  //   ],
  //   []
  // );

  // useEffect(() => {
  //   if (index < phrases[phraseIndex].length) {
  //     const timeout = setTimeout(() => {
  //       setText((prev) => prev + phrases[phraseIndex].charAt(index));
  //       setIndex(index + 1);
  //     }, 100);
  //     return () => clearTimeout(timeout);
  //   } else {
  //     const timeout = setTimeout(() => {
  //       setText("");
  //       setIndex(0);
  //       setPhraseIndex((prev) => (prev + 1) % phrases.length);
  //     }, 2000);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [index, phraseIndex, phrases]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // const toggleTheme = () => {
  //   handleThemeToggle();
  //   setRotateIcon(!rotateIcon); // Toggle rotation
  // };
  // const handleThemeToggle = () => {
  //   setIsDarkMode(!isDarkMode);
  //   document.documentElement.classList.toggle("dark", !isDarkMode);
  // };

  return (
    <div
      className={`app-container ${
        isDarkMode ? "{{bg:#000000}} text-white" : "bg-[#F5F5F4] text-black"
      } transition-all duration-300 ease-in-out`}
    >
      <nav
        className={`navbar flex items-center justify-between p-4 rounded-2xl ${
          menuOpen
            ? isDarkMode
              ? "bg-zinc-800 text-white"
              : "bg-gray-100 text-black"
            : isDarkMode
            ? "bg-zinc-900 text-white"
            : "bg-white text-black"
        } border-b-1 ${
          isDarkMode ? "border-gray-700" : "border-gray-200"
        } transition-colors duration-300 ease-in-out`}
      >
        <Link
          to="/"
          className={`sm:text-3xl text-2xl font-bold lobster-regular  leading-[2rem] rounded-xl pl-2 pr-2 pt-1 pb-1 ${
            isDarkMode ? "text-[#93e003]" : "text-[#93e003]"
          }`}
          // style={{
          //   WebkitTextStroke: `1px ${isDarkMode ? 'white' : 'black'}`,
          //   textStroke: `1px ${isDarkMode ? 'white' : 'black'}`,
          //   WebkitTextFillColor: isDarkMode ? 'white' : 'black',
          // }}
        >
          Th
        </Link>

        <div className="hidden md:flex items-center justify-center space-x-8 ml-32">
          {/* <Link to="/" className="no-underline hover:text-gray-300">
            Home
          </Link>
          <Link to="/" className="no-underline hover:text-gray-300">
            Submit Tool
          </Link> */}
          <a
            href="https://buymeacoffee.com/amansagar"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-link no-underline"
            title="Buy me a coffee"
          >
            <VscCoffee
              className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"}`}
            />
          </a>
{/* 
          <button
            onClick={handleThemeToggle}
            className="text-lg flex items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <ImSun className="transition-transform duration-300 ease-in-out" />
            ) : (
              <FaMoon className="transition-transform duration-300 ease-in-out" />
            )}
          </button> */}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.producthunt.com/posts/toolhunt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-toolhunt"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-sm"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=478083&theme=dark"
              alt="ToolHunt - Discover Top Tools for Designers & Developers | Product Hunt"
              style={{ width: "170px", height: "35px" }}
              width="180"
              height="54"
            />
          </a>

          <button className="block md:hidden text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div
            className={`absolute top-20 p-8 text-lg font-normal left-0 w-full flex flex-col items-center md:hidden z-50 ${
              isDarkMode
                ? "bg-zinc-800 rounded-t-3xl rounded-b-3xl"
                : "bg-white text-black rounded-t-3xl rounded-b-3xl"
            }`}
          >
            {/* <Link
            to="/"
            className="py-2 no-underline hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </Link> */}
            {/* <Link
            to="/submit-tool"
            className="py-2 no-underline hover:text-gray-400"
            onClick={toggleMenu}
          >
            Submit Tool
          </Link> */}
            {/* <Link
            to="/"
            className="py-2 no-underline hover:text-gray-400"
            onClick={toggleMenu}
          >
            ToolHunt
          </Link> */}

            {/* {/* <a
              href="https://buymeacoffee.com/amansagar"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-link no-underline"
              title="Buy me a coffee"
            >
              <VscCoffee
                className={`h-6 w-6 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </a> */}

             {/* <button
              onClick={toggleTheme}
              className="text-lg flex items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105 mt-2"
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            > 
              <div
                className={`transition-transform duration-300 ease-in-out ${
                  rotateIcon ? "rotate-0" : "rotate-180"
                }`}
              >
                {isDarkMode ? (
                  <ImSun className="transition-transform duration-300 ease-in-out" />
                ) : (
                  <IoMoonOutline className="transition-transform duration-300 ease-in-out" />
                )}
              </div>
            </button>  */}

            <a
              href="https://www.producthunt.com/posts/toolhunt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-toolhunt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=478083&theme=dark"
                alt="ToolHunt - Discover Top Tools for Designers & Developers | Product Hunt"
                style={{ width: "170px", height: "35px" }}
                width="180"
                height="54"
              />
            </a>
          </div>
        )}
      </nav>

      <div className="main-content px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-5">
          <a
            href="https://github.com/AmanSagar0607/ToolHunt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center px-6 py-1.5 sm:px-8 sm:py-2 border rounded-3xl duration-300 sm:mt-24 mt-16">
              <FaGithub className="mr-2" />
              <span className="poly-regular">Github</span>
            </button>
          </a>
        </div>

        <h1 className="text-sm sm:text-3xl mt-10 sm:mt-10 font-thin sm:font-thin xl:text-4xl pl-4 pr-4 raleway-bold leading-[2rem] sm:leading-[2rem]">
          Unlock your project&#39;s Potential for{" "}
          <br className="block sm:block" />
          <span className="text-3xl sm:text-5xl lg:text-7xl py-2 sm:block mt-1 sm:font-bold  sm:mt-0 leading-4.5rem] sm:leading-[4.5rem] ">
            Designers & Developers
          </span>
          {/* <br className="hidden sm:block" /> */}
        </h1>

        {/* <h1 className="text-2xl sm:text-7xl mt-10 sm:mt-12 font-thin sm:font-thin pl-4 pr-4 raleway-bold leading-[2rem] sm:leading-[5rem]">
          Unlock your project&#39;s Potential{" "}
          <br className="hidden sm:block " /> with top handpicked tools for{" "}
          <br className="hidden sm:block" />
          
          </span>
        </h1> */}

        <h2
          className={`text-center text-sm lg:text-lg sm:text-sm  mt-4 sm:mt-2 font-semi-bold px-1 poly-regular ${
            isDarkMode ? "text-gray-100" : "text-black"
          }`}
        >
          Explore curated tools and resources tailored for your needs with
          ToolHunt, effortlessly find <br className="hidden sm:block" /> the
          perfect assets for your projects, from design inspiration to
          development essentials.
          <br className="hidden sm:block" />
          Pick your tools and elevate your work instantly with these handpicked
          resources.
        </h2>

        <div className="flex justify-center mb-5 mt-14 space-x-4">
          <a
            href="#"
            onClick={() => navigate("/home")}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#6b9d00] rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#93e003] rounded group-hover:bg-[#93e003] group-hover:-mr-4 group-hover:-mt-4">
              <span
                className={`absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 
    ${isDarkMode ? "bg-[#171717]" : "bg-[#F5F5F4]"} 
    group-hover:bg-[#93e003]`}
              ></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#93e003] rounded-xl group-hover:bg-[#93e0030] group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-sm sm:text-lg lg:text-xl text-white transition-colors duration-200 ease-in-out group-hover:text-white poly-regular">
              Get Started
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
