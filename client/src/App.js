import React,{ useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route, Link, useNavigate} from "react-router-dom";

//import from helpers file
import Local from './helpers/Local';
import Api from './helpers/Api';
import days from "./database.json";

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

  // const params = useParams();
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

const addResolution = async (text,id) => {
  let newResolution = { text, complete: 0, userId:user.id};
  let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newResolution)
  };
  
  try {//I TRIED IT WITH :day_id, day_id, id and many other things...
      ///days/${id}/resolutions. This is how it works. See below...
      let response = await fetch(`/days/${id}/resolutions`, options);
      console.log(response);
      if (response.ok) {            
          getUserResolutions();
      } else {
          console.log(`Server error: ${response.status}:
          ${response.statusText}`);
      }
      
  } catch (err) {
      console.log(`Network error: ${err.message}`);
  }
  console.log(newResolution)
};


const updateResolution = async id => {
  let day_id = days.id;
  let resolution = resolutions.find(r => r.id === id);
  resolution.complete = !resolution.complete;
  console.log(id)
  let options = {
      method: "PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(resolution)
  };

  try { 
      let response = await fetch(`/days/${day_id}/resolutions/${id}`, options);
      if (response.ok) {
          getUserResolutions();
      } else {
          console.log(`Server error: ${response.status}:
          ${response.statusText}`);
      }
  } catch (err) {
      console.log(`Network error: ${err.message}`);
  }
};

const deleteResolution = async id => {
  let day_id = days.id;
  console.log(id.id)
  let options = {
      method: "DELETE"
   };

  try { 
      let response = await fetch(`/days/${day_id}/resolutions/${id}`, options);
      if (response.ok) {
          getUserResolutions();
      } else {
          console.log(`Server error: ${response.status}:
          ${response.statusText}`);
      }
  } catch (err) {
      console.log(`Network error: ${err.message}`);
  }
};

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
        <div id="navbar">
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
        </div>     
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/resolutions/:user" element={<ResolutionsView 
                getUserResolutions = {getUserResolutions} 
                toggleDoneCb={id => updateResolution(id)}
                deleteCb={id => deleteResolution(id)}
                resolutions={resolutions}
                user = {user}
                // id = {id}
              />} />
          <Route path="/days" element={<DaysView />} >
          <Route path=":id" element={<DayView 
                getUserResolutions = {getUserResolutions} 
                addResolution = {addResolution}
                updateResolution = {updateResolution}
                deleteResolution = {deleteResolution}
                resolutions = {resolutions} 
                user = {user}
                // id = {id}
              />} />
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

