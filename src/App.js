import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
   
     <Weather />
    <footer>
     This project was coded by <a href="https://shalinda-portfolio.netlify.app/" target="_blank noreferrer"> 
     Shalinda Holliday 
     </a> {""}
     and is {""}
      <a
       href="https://github.com/shollid1n/react-weather-appp"
      target="_blank noreferrer"
    
      >
        open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}


