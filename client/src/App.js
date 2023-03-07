import React,{ useEffect,useState } from "react";
import { Routes, Route, Link, useNavigate} from "react-router-dom";

//import from helpers file
import Local from './helpers/Local';
import Api from './helpers/Api';

//Import view components
import HomeView from "./components/HomeView";
import DaysView from "./components/DaysView";
import DayView from "./components/DayView";
import LoginView from "./components/Auth components/LoginView";
import ErrorView from "./components/Auth components/ErrorView";
import ResolutionsView from "./components/ResolutionsView";

//Import css
import "./App.css";
import ResolutionList from "./components/DayView components/ResolutionList";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const navigate = useNavigate();
  const userId = Local.getUserId();
  let [resolutions, setResolutions] = useState([]);
 
  useEffect(() => {
    getUserResolutions();
  }, [user]);

  function getUserResolutions() { 
    fetch(`/resolutions/${userId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(
                    `Server error: ${response.status}: ${response.statusText}`
                );
            }
        })
        .then(data => {
            setResolutions(data);
        })
        .catch (error =>  {
            console.log(`Error: ${error}`);
        });
}

  async function doLogin(username, password) {
      let myresponse = await Api.loginUser(username, password);
      if (myresponse.ok) {
          Local.saveUserInfo(myresponse.data.token, myresponse.data.user);
          setUser(myresponse.data.user);
          setLoginErrorMsg('');
          navigate('/');
      } else {
          setLoginErrorMsg('Login failed');
      }
  }

  function doLogout() {
      Local.removeUserInfo();
      setUser(null);
      console.log("hello");
      // (NavBar will send user to home page)
  }



  // when the page loads, fetch the data from the server
  useEffect(() => {
    fetch("/").then((response) => response.json());
    // .then((data) => console.log(data));
  }, []);

return (
    <div className="App">
      <div className="container">
      <h1>WELCOME TO YOUR WEEKLY RESOLUTIONS</h1>
        <div className="start">
          <button className="home">
            <label>
              <Link to="/">⌂</Link> 
            </label> 
          </button>
          <button className="login">
            <Link to="/login">login</Link>
          </button> 
          <button className="logout" onClick={doLogout}>
            logout
          </button> 
        </div>      
        <nav className="navbar">
          <button className="buttons">
            </button>
            <button className="buttons">
            <Link to="/resolutions/:user">My Resolutions</Link>
            </button> 
            <button className="buttons">
            <Link to="/days">New Resolution</Link>
            </button> 
        </nav>                   
        
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/resolutions/:user" element={<ResolutionsView resolutions = {resolutions} user = {user}/>} />
          <Route path="/days" element={<DaysView />} >
          <Route path=":id" element={<DayView getUserResolutions = {getUserResolutions} resolutions = {resolutions} user = {user}/>} />
          </Route>              
                <Route path="/login" element={
                    <LoginView 
                        loginCb={(u, p) => doLogin(u, p)} 
                        loginError={loginErrorMsg} 
                    />
                } />
                <Route path="*" element={<ErrorView code="404" text="Page not found" />} />
        </Routes>
      </div>
    </div>  
  );
}
export default App;

