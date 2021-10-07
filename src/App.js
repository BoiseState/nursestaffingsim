import './App.css';
import BudgetCalculator from './BudgetCalculator.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Budget Calculator.....</h1>
      <BudgetCalculator />
      <Footer />
    </div>

  );
}

export default App;
