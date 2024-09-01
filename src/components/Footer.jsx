import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
  return (
<<<<<<< HEAD
    <footer
      className={`footer flex sm:flex-row flex-col items-center justify-between w-full mt-6 sm:mt-20 sm:mb-8 mb-4 ${
        isDarkMode ? 'bg-[#37373] text-white' : ' text-black'
      } p-4`}
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <span className="block text:xl sm:text-xl font-normal">
          ToolHunt |{' '}
          <span className="sm:inline text-sm font-normal">
            Developed by{' '}
            <a
              href="https://linktr.ee/amansagar0607"
              className={`hover:underline ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Aman Sagar
            </a>
          </span>
        </span>
      </div>
=======
    <footer className="footer flex sm:flex-row  flex-col items-center justify-center w-full bg-gray-400 text-footer-text">
    <div className="gap-4 sm:pl-10  pl-0 pt-3 sm:pt-2 sm:mb-2 mb-5 text-center">
    Made with ❤️ in India <br />
  <span className="block sm:inline">Created by <a href="https://linktr.ee/amansagar0607" className="hover:underline">Aman Sagar</a></span>
</div>
>>>>>>> 3ecf8b91af84e461d22944af629d68bf954d8d6a

      <div className="social-links flex gap-5">
        <a
          href="https://twitter.com/AmanSagar0607"
          rel="noopener noreferrer"
          className="text-lg"
        >
          <FaTwitter
            className={`footer-icon transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-black hover:text-gray-900'
            }`}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/amansagar0607/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg"
        >
          <FaLinkedin
            className={`footer-icon transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-black hover:text-gray-900'
            }`}
          />
        </a>
        <a
          href="https://github.com/AmanSagar0607"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg"
        >
          <FaGithub
            className={`footer-icon transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-black hover:text-gray-900'
            }`}
          />
        </a>
      </div>
    </footer>
  );
};

import PropTypes from 'prop-types';

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
