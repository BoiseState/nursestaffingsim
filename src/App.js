import './App.css';

import Scenario from './components/main/Scenario.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <Scenario />
        <Footer />
      </div>
    </div>

  );
}

export default App;
