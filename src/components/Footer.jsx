import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`footer flex sm:flex-row flex-col items-center justify-between w-full mt-6 sm:mt-20 sm:mb-8 mb-4 ${
        isDarkMode ? 'bg-[#373737] text-white' : 'bg-gray-400 text-black'
      } p-4`}
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:pl-10 pl-0 pt-3 sm:pt-2 sm:mb-2 mb-5 text-center">
        <span className="block text-xl sm:text-xl font-normal">
          ToolHunt |{' '}
          <span className="sm:inline text-sm font-normal">
            Made with ❤️ in India
          </span>
        </span>
        <span className="block sm:inline text-sm font-normal">
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
      </div>

      <div className="social-links flex gap-5">
        <a
          href="https://twitter.com/AmanSagar0607"
          target="_blank"
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

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
