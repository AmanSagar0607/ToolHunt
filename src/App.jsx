import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import PasswordCard from './components/PasswordCard';
import Inspiration from "./components/Tools/Inspiration";
import Animation from "./components/Tools/Animation";
import Backgrounds from "./components/Tools/Backgrounds";
import Tailwindcss from "./components/Tools/Tailwind";
import CodeSnippets from "./components/Tools/CodeSnippets";
import Colors from "./components/Tools/Colors";
import Logos from "./components/Tools/Logos";
import Nocode from "./components/Tools/Nocode";
import Icons from "./components/Tools/Icons";
import Generator from "./components/Tools/Generator";
import Gradients from "./components/Tools/Gradients";
import Landing from "./Landing";
import Typography from "./components/Tools/Typography"; // Import the Typography component
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/gradients" element={<Gradients />} />
        <Route path="/nocode" element={<Nocode />} />
        <Route path="/generators" element={<Generator />} />
        <Route path="/tailwindcss" element={<Tailwindcss />} />
        <Route path="/codesnippets" element={<CodeSnippets />} />
        <Route path="/backgrounds" element={<Backgrounds />} />
        <Route path="/animation" element={<Animation />} />
        {/* <Route path="/passgen" element={<PasswordCard />} /> */}
        {/* <Route path="/passwords" element={<Passwords />} /> */}
        <Route path="/logos" element={<Logos />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/typography" element={<Typography />} />{" "}
        {/* Route for Typography page */}
      </Routes>
    </Router>
  );
}

export default App;