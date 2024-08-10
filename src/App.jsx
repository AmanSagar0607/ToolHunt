import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PasswordCard from './components/PasswordCard';
import InspirationPage from './components/Tools/InspirationPage';
import Colors from './components/Tools/Colors';
import Logos from './components/Tools/Logos';
import Passwords from './components/Tools/Passwords';
import Gradients from './components/Tools/Gradients'; 
// import Pricing from './components/Pricing'; 
import Landing from './Landing'; 
import Typography from './components/Tools/Typography'; // Import the Typography component
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/inspiration" element={<InspirationPage />} /> 
        <Route path="/colors" element={<Colors />} />
        <Route path="/gradients" element={<Gradients />} />
        <Route path="/passgen" element={<PasswordCard />} />
        <Route path="/passwords" element={<Passwords />} />
        <Route path="/logos" element={<Logos />} /> 
        <Route path="/typography" element={<Typography />} /> {/* Route for Typography page */}
      </Routes>
    </Router>
  );
}

export default App;
