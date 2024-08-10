import { useState, useCallback, useEffect, useRef } from "react";
import { FaClipboard } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

const PasswordCard = () => {
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
    <div className="passgen-nav flex flex-col min-h-screen">
      <Navbar />
      <h1 className="text-center text-white text-2xl mt-36 sm:text-4xl font-bold">
        Password Generator
      </h1>
      <h2 className="text-center text-gray-200 text-sm mt-2 sm:text-lg font-bold">
      Generate Secure & Strong Passwords
      </h2>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md sm:mt-20 mt-14 pt-8 mx-4 sm:mx-auto shadow-md rounded-lg p-6 backdrop-blur-lg bg-opacity-20 bg-zinc-800">
          <div className="passInput flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              placeholder="Password"
              ref={passwordRef}
              readOnly
              value={password}
              className="w-full px-4 py-2 rounded-l-lg outline-none bg-zinc-900 text-white"
            />
            <button
              onClick={copyPasswordToClipboard}
              className="px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors "
            >
              <FaClipboard />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-2 text-sm mb-4">
            <div className="flex items-center gap-x-0.5">
              <input
                type="range"
                name="length"
                min="8"
                max="32"
                value={length}
                className="h-1 w-29 bg-gray-300 rounded-lg"
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="text-white flex-shrink-0">Length: {length}</label>
            </div>
            <div className="flex items-center ml-1 gap-x-0.5">
              <input
                type="checkbox"
                id="numberInput"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label className="text-white" htmlFor="numberInput">
                Numbers
              </label>
            </div>
            <div className="flex items-center ml-1 gap-x-0.5 text-white">
              <input
                type="checkbox"
                id="characterInput"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label className="text-white" htmlFor="characterInput">
                Characters
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-white text-xl mb-4 mt-5">Recent Passwords:</h2>
            <ul className="recent-passwords mb-2 text-white">
              {passwordHistory.map((pass, index) => (
                <li key={index} className="mb-1 flex items-center justify-between">
                  {pass}
                  <button onClick={() => copyToClipboard(pass)} className="ml-2">
                    <FaClipboard />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {showToast && <div className="toast text-sm text-gray-700">Password copied!</div>}
          <Analytics />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PasswordCard;
