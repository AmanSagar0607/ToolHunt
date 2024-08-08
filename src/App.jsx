// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import PasswordCard from './components/PasswordCard';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Pricing from './components/Pricing'; // Import the new Pricing component
// import './index.css';

// const Home = () => {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <div className="main-content">
//         <h1 className="text-center text-black text-2xl mt-10 sm:text-3xl font-bold">
//           Password Generator
//         </h1>
//         <h1 className="text-black text-sm mt-1">
//           One-click password generator
//         </h1>
//       </div>

//       <div className="cards-container">
//         <div className="card">
//           <h2 className="text-xl font-bold mb-4">Password Generator</h2>
//           <Link to="/password-generator">
//             <button className="btn">Generate Password</button>
//           </Link>
//         </div>
//         <div className="card">
//           <h2 className="text-xl font-bold mb-4">Card 2</h2>
//           <p>Some content here</p>
//         </div>
//         <div className="card">
//           <h2 className="text-xl font-bold mb-4">Card 2</h2>
//           <p>Some content here</p>
//         </div>
//         <div className="card">
//           <h2 className="text-xl font-bold mb-4">Card 3</h2>
//           <p>Some content here</p>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/password-generator" element={<PasswordCard />} />
//         <Route path="/pricing" element={<Pricing />} /> {/* Add the Pricing route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PasswordCard from './components/PasswordCard';
import InspirationPage from './components/Tools/InspirationPage';
import Pricing from './components/Pricing'; // Import the new Pricing component
import Landing from './Landing'; // Import the Landing component
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Default route to Landing page */}
        <Route path="/home" element={<Home />} /> {/* Route for Home page */}
        <Route path="/inspiration" element={<InspirationPage />} /> {/* Route for Inspiration page */}
        <Route path="/password-generator" element={<PasswordCard />} />
        <Route path="/pricing" element={<Pricing />} /> {/* Route for Pricing page */}
      </Routes>
    </Router>
  );
}

export default App;
