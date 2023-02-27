import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import DaysView from "./components/DaysView";
import HomeView from "./components/HomeView";
import DayView from "./components/DayView";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // when the page loads, fetch the data from the server
  useEffect(() => {
    fetch("/").then((response) => response.json());
    // .then((data) => console.log(data));
  }, []);

return (
    <div className="App">
      <h2>WELCOME TO YOUR WEEKLY RESOLUTIONS</h2>
      <div className="container">
      
      
      <nav class="my-navbar">
        <button className="1">
          <Link to="/">Home</Link> 
          </button>
          <button className="2">
          <Link to="/days">Days</Link>
          </button> 
      </nav>                   
      
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/days" element={<DaysView />} >
        <Route path=":id" element={<DayView />} />
        </Route>
      </Routes>
    </div>
    </div>  
  );
}
export default App;

