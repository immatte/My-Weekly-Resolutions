// import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Monday from "./components/HomeView";
// import Tuesday from "./components/Tuesday";
import DaysView from "./components/DaysView";
import HomeView from "./components/HomeView";
import DayView from "./components/DayView";
import "./App.css";


function App() {
  // when the page loads, fetch the data from the server
  // useEffect(() => {
  //   fetch("/").then((response) => response.json());
  //   // .then((data) => console.log(data));
  // }, []);

return (
    <div className="App">
      HELLO, WELCOME TO YOUR WEEKLY RESOLUTIONS
      <nav>
          <Link to="/">Home</Link> |
          <Link to="/days">Days</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/days" element={<DaysView />} >
        <Route path=":id" element={<DayView />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;




//import React, { useEffect, useState } from "react";
// import './App.css';
// //import AddDailyResolutionForm from "./components/AddDailyResolutionForm";
// //import DailyResolutionList from "./components/DailyResolutionList";
// //import MyWeeklyResolutions from "./components/MyWeeklyResolutions";
// //import FeatResolution from "./components/FeatResolution";
// import { Routes, Route, Link } from "react-router-dom";

// function App() {
//   const [allDailyResolutions, setAllDailyResolutions] = useState([]);
//  // const [weeklyResolutions, setWeeklyResolutions] = useState([]);
//   // const [DRF, setDRF] = useState(false); //to use WR first

// // const handleChangeView = (DRF) => {
// //   setDRF(DRF);
// // }


// useEffect(() => {
//   getAllDailyResolutions();
// }, []);

// function getAllDailyResolutions() {
//   fetch("/dailyResolutions")
//     .then(response => response.json())
//     .then(allDailyResolutions => {
//       setAllDailyResolutions(allDailyResolutions);

//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

// // function getWeeklyResolutions() {
// //   fetch("/weeklyResolutions")
// //     .then(response => response.json())
// //     .then(weeklyResolutions => {
// //       setWeeklyResolutions(weeklyResolutions);

// //     })
// //     .catch(error => {
// //       console.log(error);
// //     });
// // }
// useEffect(() => {
//   addDailyResolution();
// }, []);

//   async function addDailyResolution(newDailyResolution) {
//   //   newDailyResolution.id = allDailyResolutions.length + 1; //to add an unique ID
//   //   setAllDailyResolutions(allDailyResolutions => [...allDailyResolutions, newDailyResolution]);
//     console.log(newDailyResolution);
//   //Define fetch options
//     let options = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newDailyResolution)
//     };
    
//     try {
//       let response = await fetch("/dailyResolutions", options);
//       if (response.ok) {
//         let data = await response.json();
//         setAllDailyResolutions(data);
//       } else {
//         console.log(`Server error: ${response.status}:
//         ${response.statusText}`);
//       }
//       } catch (err) {
//         console.log(`Network error: ${err.message}`);
//       }
//       }
    
//       // async function addWeeklyResolution(newWeeklyResolution) {
//       //   //   newDailyResolution.id = allDailyResolutions.length + 1; //to add an unique ID
//       //   //   setAllDailyResolutions(allDailyResolutions => [...allDailyResolutions, newDailyResolution]);
//       //     console.log(newWeeklyResolution);
//       //   //Define fetch options
//       //     let options = {
//       //       method: "POST",
//       //       headers: { "Content-Type": "application/json" },
//       //       body: JSON.stringify(newWeeklyResolution)
//       //     };
          
//       //     try {
//       //       let response = await fetch("/weeklyResolutions", options);
//       //       if (response.ok) {
//       //         let data = await response.json();
//       //         setWeeklyResolutions(data);
//       //       } else {
//       //         console.log(`Server error: ${response.status}:
//       //         ${response.statusText}`);
//       //       }
//       //       } catch (err) {
//       //         console.log(`Network error: ${err.message}`);
//       //       }
//       //       }



//   function toggleDoneDR(id) { //DR=Daily Resolution
//     //make a copy of state
//     let newAllDailyResolutions = [...allDailyResolutions];
//     //find the resolution to modify
//     let dailyResolution = newAllDailyResolutions.find(dr => dr.id === id);
//     //toggle the "done" property
//     dailyResolution.done = !dailyResolution.done;
//     //update state
//     setAllDailyResolutions(allDailyResolutions => newAllDailyResolutions);
//   }

//   async function deleteDR(id) { //DR=Daily Resolution
//     //make copy of state and remove resolution in same step
//   // let newAllDailyResolutions = allDailyResolutions.filter(r => r.id !== id);
//   // //update state
//   // setAllDailyResolutions(allDailyResolutions => newAllDailyResolutions);
//   let options = {
//     method: "DELETE"
//   };
  
//   try {
//     let response = await fetch (`/dailyResolutions/${id}`, options);
//     if (response.ok) {
//       let data = await response.json();
//       setAllDailyResolutions(data);
//     } else {
//       console.log(`Server error: ${response.status}:
//      ${response.statusText} `);
//     }
//     } catch (err) {
//       console.log(`Network error: ${err.message}`);
//     }
//   }
  
//   return (
//     <div className="App">
//       <h1>MY WEEKLY RESOLUTIONS</h1>
//       <nav>
//         {/* <Link to="/dailyResolutions">11Add your Daily Resolutions</Link> |    */}
//         <Link to="/weeklyResolutions">22My Weekly Resolutions</Link> 
//         {/* <button className={ DRF ? 'active' : null } onClick={() =>
//         handleChangeView(true)}>MY WEEKLY RESOLUTIONS</button>
//         <button className={ !DRF ? 'active' : null } onClick={() =>
//         handleChangeView(true)}>ADD DAILY RESOLUTIONS</button> */}
//       </nav>

//     <Routes>
//         {/* <Route path="/dailyresolutions" element={<AddDailyResolutionForm />} /> */}
//         <Route path="/weeklyresolutions" element={<MyWeeklyResolutions />} /> 
//       <Route path="/weeklyresolutions/:id" element={<FeatResolution />} /> 
//       </Routes>
// {/* {
//   (DRF)
//   //pass down callback to add new daily resolution
//   ? <addDailyResolutionForm addDailyResolutionCb={(newDailyResolution) => addDailyResolution(newDailyResolution)} />
//   //pass down: all daily resolutions, that is a weekly resolution
//   :  <MyWeeklyResolutions addWeeklyResolutionCb={(newWeeklyResolution) => addWeeklyResolution(newWeeklyResolution)} //I don't know what to write between ()
//       />

// } */}
      
//     <div id="app-grid">
//       <div>
//         <h2>My Daily Resolutions for this week</h2>
//         <DailyResolutionList
//           allDailyResolutions={allDailyResolutions}
//           toggleDoneDRCb={id => toggleDoneDR(id)}
//           deleteDRCb={id => deleteDR(id)} 
//        />

     
//       <h2>Add a New Daily Resolution</h2>
//       <AddDailyResolutionForm addDailyResolutionCb={dr => addDailyResolution(dr)} />
//     </div>
//     </div>
//     </div>
//   );
//   }

  
// export default App;
