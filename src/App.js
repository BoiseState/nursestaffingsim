import './App.css';
import AppInMain from './components/main/AppInMain.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
          <AppInMain />
      <Footer />
    </div>

  );
}

export default App;
