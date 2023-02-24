import React, { useEffect, useState } from "react";
import './App.css';
import AddDailyResolutionForm from "./components/AddDailyResolutionForm";
import DailyResolutionList from "./components/DailyResolutionList";


function App() {
  const [allDailyResolutions, setAllDailyResolutions] = useState([]);

useEffect(() => {
  getAllDailyResolutions();
}, []);

function getAllDailyResolutions() {
  fetch("/dailyResolutions")
    .then(response => response.json())
    .then(allDailyResolutions => {
      setAllDailyResolutions(allDailyResolutions);

    })
    .catch(error => {
      console.log(error);
    });
}

  async function addDailyResolution(newDailyResolution) {
  //   newDailyResolution.id = allDailyResolutions.length + 1; //to add an unique ID
  //   setAllDailyResolutions(allDailyResolutions => [...allDailyResolutions, newDailyResolution]);
    console.log(newDailyResolution);
  //Define fetch options
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDailyResolution)
    };
    
    try {
      let response = await fetch("/dailyResolutions", options);
      if (response.ok) {
        let data = await response.json();
        setAllDailyResolutions(data);
      } else {
        console.log(`Server error: ${response.status}:
        ${response.statusText}`);
      }
      } catch (err) {
        console.log(`Network error: ${err.message}`);
      }
      }
    

  function toggleDoneDR(id) { //DR=Daily Resolution
    //make a copy of state
    let newAllDailyResolutions = [...allDailyResolutions];
    //find the resolution to modify
    let dailyResolution = newAllDailyResolutions.find(r => r.id === id);
    //toggle the "done" property
    dailyResolution.done = !dailyResolution.done;
    //update state
    setAllDailyResolutions(allDailyResolutions => newAllDailyResolutions);
  }

  async function deleteDR(id) { //DR=Daily Resolution
    //make copy of state and remove resolution in same step
  // let newAllDailyResolutions = allDailyResolutions.filter(r => r.id !== id);
  // //update state
  // setAllDailyResolutions(allDailyResolutions => newAllDailyResolutions);
  let options = {
    method: "DELETE"
  };
  
  try {
    let response = await fetch (`/dailyResolutions/${id}`, options);
    if (response.ok) {
      let data = await response.json();
      setAllDailyResolutions(data);
    } else {
      console.log(`Server error: ${response.status}:
     ${response.statusText} `);
    }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }
  
  return (
    <div className="App">
      <h1>MY WEEKLY RESOLUTIONS</h1>

      <h2>My Daily Resolutions for this week</h2>
      <DailyResolutionList
       dailyResolutions={allDailyResolutions}
       toggleDoneCb={id => toggleDoneDR(id)}
       deleteCb={id => deleteDR(id)} 
       />
      
      <h2>Add a New Daily Resolution</h2>
      <AddDailyResolutionForm addDailyResolutionCb={ndr => addDailyResolution(ndr)} />
    </div>);
  }

  // function addDailyResolution(newDailyResolution) {
  //   newDailyResolution.id = allDailyResolutions.length + 1; //to add an unique ID
  //   setAllDailyResolutions(allDailyResolutions => [...allDailyResolutions, newDailyResolution]);
    //push on the allDailyResolutions array
    // let newAllDailyResolutions = [...allDailyResolutions];
    // newAllDailyResolutions.push(newDailyResolution);
    // setAllDailyResolutions(allDailyResolutions => newAllDailyResolutions);
  // }






export default App;
