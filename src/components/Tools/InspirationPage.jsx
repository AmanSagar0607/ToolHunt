import { useState } from 'react';
import Navbar from './../Navbar'; 
import Footer from './../Footer'; 

const Inspiration = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [setSuggestions] = useState([]);

  const inspirationResources = [
    { id: 1, title: 'Collect UI', link: 'https://collectui.com', logo: '' },
    { id: 2, title: 'UI Sources', link: 'https://uisources.com', logo: '' },
    { id: 3, title: 'Dribbble', link: 'https://dribbble.com', logo: 'https://img.icons8.com/?size=100&id=Wkmw3VcFPr8T&format=png&color=000000' },
    { id: 4, title: 'Behance', link: 'https://behance.net', logo: '' },
    { id: 5, title: 'Awwwards', link: 'https://awwwards.com', logo: '' },
    { id: 6, title: 'One Page Love', link: 'https://onepagelove.com', logo: '' },
    { id: 7, title: 'Glitch', link: 'https://glitch.com', logo: '' },
    { id: 8, title: 'Codepen Topics', link: 'https://codepen.io/topics', logo: '' },
    { id: 9, title: 'UI Movement', link: 'https://uimovement.com', logo: '' },
    { id: 10, title: 'httpster', link: 'https://httpster.net', logo: '' },
    { id: 11, title: 'DesignMunk', link: 'https://designmunk.com', logo: '' },
    { id: 12, title: 'Web Design Experiments by Jen Simmons', link: 'https://jensimmons.com', logo: '' },
    { id: 13, title: 'iOS Icon Gallery', link: 'https://iosicongallery.com', logo: '' },
    { id: 14, title: 'Color Wander', link: 'https://colorwander.com', logo: '' },
    { id: 15, title: 'scrnshts', link: 'https://scrnshts.com', logo: '' },
    { id: 16, title: 'Product Hunt', link: 'https://producthunt.com', logo: '' },
    { id: 17, title: 'Search by Muzli', link: 'https://muz.li', logo: '' },
    { id: 18, title: 'SaaS Pages', link: 'https://saas-pages.com', logo: '' },
    { id: 19, title: 'Email Love', link: 'https://emaillove.com', logo: '' },
    { id: 20, title: 'Tailwind UI', link: 'https://tailwindui.com', logo: '' },
    { id: 21, title: 'SaaS landing page examples', link: 'https://saas-landing-page-examples.com', logo: '' },
    { id: 22, title: 'Screenshot Inspiration', link: 'https://screenshotinspiration.com', logo: '' },
    { id: 23, title: 'LaudableApps', link: 'https://laudableapps.com', logo: '' },
    { id: 24, title: 'Flim', link: 'https://flim.com', logo: '' },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredSuggestions = inspirationResources.filter((resource) =>
        resource.title.toLowerCase().includes(query.toLowerCase())
      ).map((resource) => resource.title);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filteredResources = inspirationResources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container ">
      <Navbar onSearch={handleSearch} />
      <div className="main-content">
        <h1 className="text-center text-black text-2xl mt-20 sm:text-3xl font-bold">
          Design Inspiration
        </h1>
        <h1 className="text-black text-sm mt-1 mb-10">
          Explore a curated collection of design resources
        </h1>
        
        <div className="relative w-full sm:max-w-md mx-auto mb-20">
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
                <li key={index} className="px-3 py-1 hover:bg-gray-200 cursor-pointer">
                  {suggestion}
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </div>

      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 ">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.link}
              className="card border p-4 rounded shadow flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white text-center"
            >
              {resource.logo ? (
                <img src={resource.logo} alt={resource.title} className="w-16 h-16 mb-4" />
              ) : (
                <div className="text-4xl mb-4 ">🔗</div>
              )}
              <h2 className="text-sm font-bold mb-4 p-2 rounded-2xl">{resource.title}</h2>
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

export default Inspiration;
