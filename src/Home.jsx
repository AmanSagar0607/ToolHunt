import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [setSuggestions] = useState([]);

  const cards = [
    {
      id: 1,
      title: "Inspiration",
      icon: "💡",
      content: "Find design inspiration",
      link: "/inspiration",
    },
    {
      id: 2,
      title: "Colors",
      icon: "🎨",
      content: "Explore color palettes",
      link: "/colors",
    },
    {
      id: 3,
      title: "Gradients",
      icon: "🌈",
      content: "Discover gradient tools",
      link: "/gradients",
    },
    {
      id: 4,
      title: "Typography",
      icon: "🔤",
      content: "Browse typography resources",
      link: "/typography",
    },
    {
      id: 5,
      title: "Logos",
      icon: "🏷️",
      content: "Find logo design tools",
      link: "/logos",
    },
    {
      id: 6,
      title: "Password Generator",
      icon: "🔐",
      content: "Generate secure passwords",
      link: "/password-generator",
    },
    {
      id: 7,
      title: "Templates for Powerpoint",
      icon: "💼",
      content: "Powerpoint templates",
    },
    {
      id: 8,
      title: "Code snippets",
      icon: "📋",
      content: "Find useful code snippets",
    },
    {
      id: 9,
      title: "Tailwind CSS",
      icon: "🌱",
      content: "Tailwind CSS resources",
    },
    { id: 10, title: "Generators", icon: "⚗️", content: "Various generators" },
    { id: 11, title: "Icons", icon: "💠", content: "Browse icons" },
    {
      id: 12,
      title: "Open Source Icons",
      icon: "💠❤️",
      content: "Free open source icons",
    },
    { id: 13, title: "Emoji", icon: "😀", content: "Emoji resources" },
    { id: 14, title: "Animations", icon: "⚡", content: "Animation tools" },
    {
      id: 15,
      title: "Illustrations",
      icon: "🖼️",
      content: "Find illustrations",
    },
    {
      id: 16,
      title: "404 Illustrations",
      icon: "👻",
      content: "404 error illustrations",
    },
    {
      id: 17,
      title: "3D Illustrations",
      icon: "🧊",
      content: "3D illustrations",
    },
    { id: 18, title: "Backgrounds", icon: "🌄", content: "Find backgrounds" },
    { id: 19, title: "Upscalers", icon: "📏", content: "Image upscalers" },
    {
      id: 20,
      title: "Image Colorizers",
      icon: "🔆",
      content: "Colorize images",
    },
    {
      id: 21,
      title: "Remove Background",
      icon: "✂️",
      content: "Remove image backgrounds",
    },
    { id: 22, title: "Patterns", icon: "⚜️", content: "Explore patterns" },
    { id: 23, title: "Photos", icon: "📷", content: "Find photos" },
    { id: 24, title: "Videos", icon: "🎞️", content: "Browse videos" },
    { id: 25, title: "Audios", icon: "🎵", content: "Find audio resources" },
    { id: 26, title: "Mockups", icon: "✒️", content: "Explore mockups" },
    {
      id: 27,
      title: "Design patterns",
      icon: "📐",
      content: "Design patterns resources",
    },
    { id: 28, title: "Prototyping", icon: "📱", content: "Prototyping tools" },
    {
      id: 29,
      title: "Design Research",
      icon: "🤷",
      content: "Design research resources",
    },
    { id: 30, title: "Copywriting", icon: "✍️", content: "Copywriting tools" },
    {
      id: 31,
      title: "No-code Website builder",
      icon: "🦾",
      content: "No-code website builders",
    },
    {
      id: 32,
      title: "No-code Automations",
      icon: "🚀",
      content: "No-code automations",
    },
    {
      id: 33,
      title: "No-code Databases",
      icon: "📊",
      content: "No-code databases",
    },
    {
      id: 34,
      title: "Artificial Intelligence",
      icon: "🤖",
      content: "AI tools and resources",
    },
    {
      id: 35,
      title: "ChatGPT Telegram",
      icon: "💬",
      content: "ChatGPT on Telegram",
    },
    {
      id: 36,
      title: "Checklists",
      icon: "✅",
      content: "Checklists and tools",
    },
    {
      id: 37,
      title: "Accessibility",
      icon: "♿",
      content: "Accessibility resources",
    },
    {
      id: 38,
      title: "Styleguides",
      icon: "🗂️",
      content: "Styleguides and resources",
    },
    { id: 39, title: "Game design", icon: "🎮", content: "Game design tools" },
    { id: 40, title: "NFT", icon: "💎", content: "NFT tools and resources" },
    {
      id: 41,
      title: "COVID-19",
      icon: "😷",
      content: "COVID-19 related tools",
    },
    { id: 42, title: "Trends", icon: "📈", content: "Trends and analytics" },
    { id: 43, title: "API", icon: "⚙️", content: "API tools and resources" },
    { id: 44, title: "Serverless", icon: "☁️", content: "Serverless tools" },
    { id: 45, title: "Monitoring", icon: "👨‍💻", content: "Monitoring tools" },
    { id: 46, title: "Tools", icon: "🔨", content: "Various tools" },
    {
      id: 47,
      title: "Productivity",
      icon: "⌚",
      content: "Productivity tools",
    },
    {
      id: 48,
      title: "Browser extensions",
      icon: "🌐",
      content: "Browser extensions",
    },
    { id: 49, title: "Focus", icon: "🧠", content: "Focus tools" },
    { id: 50, title: "Learning", icon: "📖", content: "Learning resources" },
    {
      id: 51,
      title: "Mental models",
      icon: "🔄",
      content: "Mental models and resources",
    },
    {
      id: 52,
      title: "Books",
      icon: "📚",
      content: "Books and reading resources",
    },
    { id: 53, title: "Skills list", icon: "💪", content: "List of skills" },
    { id: 54, title: "Coupons", icon: "👛", content: "Coupons and deals" },
    {
      id: 55,
      title: "Curated lists",
      icon: "📑",
      content: "Curated lists of tools",
    },
  ];

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

  return (
    <div className="app-container">
      <Navbar onSearch={handleSearch} />
      <div className="main-content">
      
        <h1 className="text-white text-5xl mt-20 sm:text-5xl font-bold">
          Unleash Your Creativity with Top Tools <br />
          for Designers & Developers
        </h1>

        
        <h1 className="text-center text-white text-xl mt-10 mb-10 sm:text-xl font-bold">
          Discover Handpicked Tools & Resources Just for You 😉
        </h1>

        {/*  */}

        <div className="relative w-full sm:max-w-md mx-auto mb-20 ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded"
          />
          {/* {suggestions.length > 0 && (
            <ul className="absolute left-0 w-full bg-white border rounded mt-1 text-sm">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </div>

      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="card border p-4 rounded shadow flex flex-col items-center justify-center transition-all duration-300 bg-black text-white text-center"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="text-xl font-bold mb-4">{card.title}</h2>
              <p>{card.content}</p>
            </a>
          ))
        ) : (
          <div className="text-center mt-10">No results found</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
