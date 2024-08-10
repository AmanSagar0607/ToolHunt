import { useNavigate, Link } from "react-router-dom";
// import Footer from "./components/Footer";
import { FaGithub } from "react-icons/fa";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <nav className="landing-nav flex items-center justify-between p-2">
        <Link
          to="/"
          className=" sm:text-2xl text-2xl mr-5 font-bold bg-gradient-to-tl from-slate-500 via-violet-500 to-zinc-400 bg-clip-text text-transparent"
        >
          ToolHunt
        </Link>

        <div className="space-x-4 flex items-center">
          {/* <a
            href="https://github.com/AmanSagar0607/ToolHunt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-600 transition-colors"
          >
            GitHub
          </a> */}

          <a
            href="https://www.producthunt.com/posts/toolhunt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-toolhunt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=478083&theme=dark"
              alt="ToolHunt - Discover Top Tools for Designers & Developers | Product Hunt"
              style={{ width: "180px", height: "35px" }}
              width="180"
              height="54"
            />
          </a>
        </div>
      </nav>

      <div className="main-content px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-5">
          <a
            href="https://github.com/AmanSagar0607/ToolHunt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center px-4 py-1.5 sm:px-8 sm:py-2.5 border rounded-3xl 
             duration-300 sm:mt-24 mt-16">
              <FaGithub className="mr-2" />
              <span>Github</span>
            </button>
          </a>
        </div>

        <div className="text-center  mb-8">
          <button className="landing-sub-text px-4 py-2.5 sm:px-6 sm:py-3 rounded-3xl text-white bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-500 via-zinc-600 to-zinc-600 transition-colors duration-300 mt-1 sm:mt-2 text-sm sm:text-base shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]">
            Over 50+ ready-to-work Tools & Resources!
          </button>
        </div>

        <h1 className="text-2xl sm:text-5xl mt-5 sm:mt-10 font-bold pl-1 pr-1">
          Elevate Your Projects with the Best Tools for{" "}
          <br className="hidden sm:block" />
          <span className="py-2 sm:block mt-1 font-black sm:mt-2 bg-gradient-to-br from-sky-800 via-violet-200 to-sky-200 bg-clip-text text-transparent">
        Designers & Developers
          </span>
        </h1>

        <h2 className="text-center text-gray-100 text-sm sm:text-lg mt-4 sm:mt-10  font-semi-bold px-1">
          Explore curated tools and resources tailored for your needs with
          ToolHunt, effortlessly find <br className="hidden sm:block" /> the
          perfect assets for your projects, from design inspiration to
          development essentials.
          <br className="hidden sm:block" />
          Pick your tools and elevate your work instantly with these handpicked
          resources.
        </h2>

        {/* <div className="flex justify-center">
          <button
            onClick={() => navigate("/home")}
            className="flex font-bold items-center gap-2 px-4 py- sm:px-6 sm:py-2.5 border rounded-3xl transition-colors duration-300 sm:mt-10 mt-10 hover:bg-gradient-to-tl hover:from-slate-800 hover:via-violet-500 hover:to-zinc-400 hover:text-white"
          >
            <FaGithub />
            <span>Get Started</span>
          </button>
        </div> */}
        <div className="text-center mb-5 mt-14">
  <a
    href="#"
    onClick={() => navigate("/home")}
    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-tl from-slate-500 via-violet-500 to-zinc-400 rounded-xl group"
  >
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gradient-to-tl from-slate-500 via-violet-900 to-zinc-400  rounded group-hover:-mr-4 group-hover:-mt-4">
      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-violet-200"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-gradient-to-tl from-slate-500 via-violet-900 to-zinc-400  rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
      Get Started
    </span>
  </a>
</div>

      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
