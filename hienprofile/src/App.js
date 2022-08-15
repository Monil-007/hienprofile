import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/index';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* main body */}
      <Home />
      <About />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
