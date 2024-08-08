import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="gap-5 mb-1">PassGen &copy; 2024</div>
      <div className="social-links flex gap-5 mb-1">
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
