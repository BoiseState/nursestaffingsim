import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/main/About.js';
import Scenario from './components/main/Scenario.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className="container">
      <div className="App">
          <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Scenario />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
      <Footer />
      </div>
    </div >
  );
}

export default App;
