import { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollToTopButton = ({ isDarkMode }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition-colors duration-300 z-[9999] ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          } hover:bg-opacity-90`}
        >
          <GoArrowUp size={24} />
        </button>
      )}
    </>
  );
};

import PropTypes from 'prop-types';

ScrollToTopButton.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;
