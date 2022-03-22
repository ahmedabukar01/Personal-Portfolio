import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './styles/home.scss';

function App() {
  return (
    <div className="wrapper">
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
