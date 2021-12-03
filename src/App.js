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
        {/* <Router history={history}> */}
          <div>
          <Header />
          <Routes>
            <Route index path="/f21-angels-of-mercy" element={<Scenario />} />
            <Route path="/f21-angels-of-mercy/about" element={<About />} />
          </Routes>
          </div>
        {/* </Router> */}
      <Footer />
      </div>
    </div >
  );
}

export default App;
