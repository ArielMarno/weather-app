import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel'
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
      <About />
      <Footer />
    </div>
  );
}

export default App;
