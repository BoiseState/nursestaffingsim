import './App.css';
import About from './components/header/About.js';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/f21-angels-of-mercy/" element={<Home />} />
            <Route path="/f21-angels-of-mercy/about" element={<About />} />
          </Routes>
        </Router>
  );
}

export default App;
