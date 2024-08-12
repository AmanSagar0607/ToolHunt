import { FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer flex sm:flex-row  flex-col items-center justify-center w-full bg-gray-400 text-footer-text">
    <div className="gap-4 sm:pl-10  pl-0 pt-3 sm:pt-2 sm:mb-2 mb-5 text-center">
    Made with ❤️ in India <br />
  <span className="block sm:inline">Created by <a href="https://linktr.ee/amansagar0607" className="hover:underline">Aman Sagar</a></span>
</div>

      <div className="social-links flex gap-5 mb-2 sm:pr-12 pr-0 ">
        <a
          href="https://twitter.com/AmanSagar0607"
          rel="noopener noreferrer"
          className="text-link text-xl"
        >
          <FaTwitter className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/amansagar0607/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link text-xl"
        >
          <FaLinkedin className="footer-icon" />
        </a>
        <a
          href="https://github.com/AmanSagar0607"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link text-xl"
        >
          <FaGithub className="footer-icon" />
        </a>
        {/* <a
          href="mailto:amansagar0307@gmail.com"
          className="text-link text-xl"
        >
          <FaEnvelope className="footer-icon" />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
