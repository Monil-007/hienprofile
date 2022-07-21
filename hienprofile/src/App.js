import './App.css';
import Footer from './components/Footer.js'; 
import Header from './components/Header.js'; 
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* main body */}
      <Home/>
      <About/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
