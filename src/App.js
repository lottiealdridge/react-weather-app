import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Rome"/>
      <footer>
      <a href="https://github.com/lottiealdridge/react-weather-app" rel ="noreferrer"target="_blank">See open sourced code here</a>
      </footer>
      </div>
    </div>
  );
}


