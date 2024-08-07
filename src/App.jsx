import { useState, useCallback, useEffect, useRef } from "react";
import "./index.css";
import { FaClipboard, FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { VscCoffee } from "react-icons/vsc";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [passwordHistory, setPasswordHistory] = useState([]);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()[]{}+,-./:;<=>?`";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      setPasswordHistory((prevHistory) => {
        const newHistory = [password, ...prevHistory];
        return newHistory.slice(0, 5);
      });
    }
  }, [password]);

  const copyToClipboard = useCallback((password) => {
    navigator.clipboard.writeText(password);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }, []);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="text-xl">PassGen</div>
        <div className="flex items-center space-x-4">
          <a
            href="https://buymeacoffee.com/amansagar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            title="Buy me a coffee" // Tooltip text here
          >
            <VscCoffee className="h-7 w-7" />
          </a>
        </div>
      </nav>

      <div className="main-content">
        <h1 className="text-center text-black text-2xl mt-10 sm:text-3xl font-bold">
          Password Generator
        </h1>
        <h1 className="text-black text-sm mt-1">
          One-click password generator
        </h1>
      </div>

      <div id="password-generator" className="password-generator-section">
        <div className="glass-card w-full max-w-md mx-4 sm:mx-auto shadow-md rounded-lg">
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              placeholder="Password"
              ref={passwordRef}
              readOnly
              value={password}
              className="w-full px-4 py-2 rounded-lg outline-none"
            />
            <button
              onClick={copyPasswordToClipboard}
              className="button-copy text-black-700 xm-3 rounded py-0.5 shrink-0"
            >
              <FaClipboard className="ml-2 mr-2" />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-2 text-sm mb-4">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                name="length"
                min="8"
                max="32"
                value={length}
                className="h-1 w-20 bg-gray-300 rounded-lg"
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="text-black">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label className="text-black" htmlFor="numberInput">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1 text-black">
              <input
                type="checkbox"
                id="characterInput"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label className="text-black" htmlFor="characterInput">
                Special Characters
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-black text-xl mb-2">Recent Passwords:</h2>
            <ul className="recent-passwords text-black">
              {passwordHistory.map((pass, index) => (
                <li
                  key={index}
                  className="mb-1 flex items-center justify-between"
                >
                  {pass}
                  <button
                    onClick={() => copyToClipboard(pass)}
                    className="ml-2"
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        

        {showToast && (
          <div className="toast text-sm">Password copied!</div>
        )}
      </div>

      <Analytics/>

      <footer className="footer ">
        <div className=" gap-5 mb-1">PassGen &copy; 2024</div>
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
          <a
            href="mailto:amansagar0307@gmail.com"
            className="text-link text-xl"
          >
            <FaEnvelope className="footer-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
