import { useNavigate, Link } from "react-router-dom";
import Footer from "./components/Footer";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <nav className="landing-nav flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-white bg-gradient-to-tl from-slate-400 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
          PassGen
        </Link>
        
        <div className="space-x-4">
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-600 transition-colors"
          >
            GitHub
          </a>
          {/* Add more links here if needed */}
        </div>
      </nav>
      <div className="main-content px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <button
            onClick={() => navigate('/home')}
            className="px-4 py-2 sm:px-6 sm:py-3 border rounded-3xl bg-amber-700 text-white hover:bg-black transition-colors duration-300 mt-20 sm:mt-28 text-sm sm:text-base"
          >
            Over 200+ ready-to-work Tools & Resources!
          </button>
        </div>
        <h1 className="text-white text-3xl sm:text-5xl mt-10 sm:mt-20 font-bold">
          Unleash Your Creativity with Top Tools <br className="hidden sm:block" />
          for Designers & Developers
        </h1>
        <h2 className="text-center text-white text-lg sm:text-xl mt-6 sm:mt-10 mb-8 sm:mb-10 font-bold">
          Discover Handpicked Tools & Resources Just for You 😉
        </h2>
        <div className="text-center mb-16">
          <button
            onClick={() => navigate('/home')}
            className="px-4 py-2 sm:px-6 sm:py-3 border rounded-3xl bg-blue-500 text-white hover:bg-black transition-colors duration-300 text-sm sm:text-base"
          >
            Get Started
          </button>
        </div>
        <h1 className="text-white text-3xl sm:text-5xl mt-10 sm:mt-20 font-bold">
          Unleash Your Creativity with Top Tools <br className="hidden sm:block" />
          for Designers & Developers
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
