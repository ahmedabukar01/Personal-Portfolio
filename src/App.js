import About from './pages/About';
import Brand from './pages/Brand';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './styles/home.scss';

function App() {
  return (
    <div className="wrapper">
      <Home />
      <About />
      <Portfolio />
      <Brand />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
