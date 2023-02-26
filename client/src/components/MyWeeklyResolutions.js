// import React, { useState, useEffect} from "react";
// import "./MyWeeklyResolutions.css";
// import DailyResolutionList from "./DailyResolutionList";
// import resolutions from "../database.json";
// import { Link, Outlet } from "react-router-dom";


// //HOW DO I SAY THAT THIS FUNCTION HAS TO PASS THE DAILY RESOLUTION LIST?

// // function MyWeeklyResolutions() {
// // const [weeklyResolutions, setWeeklyResolutions] = useState([]);
     

// // useEffect (() => {
// //     getWeeklyResolutions();
// // }, []);

// // function getWeeklyResolutions() {
// //     fetch("/weeklyResolutions")
// //         .then(response => response.json())
// //         .then(weeklyResolutions => {
// //          setWeeklyResolutions(weeklyResolutions);
                  
// //         })
// //         .catch(error => {
// //         console.log(error);
// //         });
// //      }
                    
// // async function addWeeklyResolution(newWeeklyResolution) {
// // //   newDailyResolution.id = allDailyResolutions.length + 1; //to add an unique ID
// // //   setAllDailyResolutions(allDailyResolutions => [...allDailyResolutions, newDailyResolution]);
// //     console.log(newWeeklyResolution);
// //     //Define fetch options
// //          let options = {
// //              method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(newWeeklyResolution)
// //          };
                            
// //         try {
// //             let response = await fetch("/weeklyResolutions", options);
// //             if (response.ok) {
// //             let data = await response.json();
// //             setWeeklyResolutions(data);
// //              } else {
// //                 console.log(`Server error: ${response.status}:
// //                  ${response.statusText}`);
// //                     }
// //                 } catch (err) {
// //                     console.log(`Network error: ${err.message}`);
// //                     }
// //                     }
// export default function MyWeeklyResolutions() {
//     const [allDailyResolutions, setAllDailyResolutions] = useState([]);
//     useEffect(() => {
//         FeatResolution();
//       }, []);

//     function toggleDoneDR(id) { //DR=Daily Resolution
//         //make a copy of state
//         let newAllDailyResolutions = [...allDailyResolutions];
//         //find the resolution to modify
//         let dailyResolution = newAllDailyResolutions.find(dr => dr.id === id);
//         //toggle the "done" property
//         dailyResolution.done = !dailyResolution.done;
//         //update state
//         setAllDailyResolutions(allDailyResolutions => newAllDailyResolutions);
//       }

//    return (
//         // <div>This is View 2
//              <div id="app-grid">This is view 2?
//       {/* <div> */}
//         <h2>My Daily Resolutions for this week</h2>
//         <DailyResolutionList
//           allDailyResolutions={allDailyResolutions}
//           toggleDoneDRCb={id => toggleDoneDR(id)}
//           deleteDRCb={id => deleteDR(id)} 
//        />
//        <h2>Add a New Daily Resolution</h2>
//       <FeatResolutionForm FeatResolutionCb={fr => addFeatResolution(fr)} />
//             {resolutions.map((resolution) => (
//                 <div key={resolution.id}>
//                     <p>
//                         <Link to={`/weeklyresolutions/${resolution.id}`}>{resolution.day}</Link>
//                     </p>
                    
                 
//                     {/* <p>{resolution.day}</p> */}
//                     </div>
                    
//             ))}
//             {/* {props.DailyResolutionList.map((resolution) => (
//             <div key={resolution.id}>
//             <h2>My Daily Resolutions for this week</h2>
//         </div> 
//  ))} */}
//  {/* {resolutions.map((resolution) => (
//     <div key={resolution.id}>
//         <p>
            
//         </div> 
//  ))} */}
//  <Outlet />
//      </div> 
     
//     );
//    }
  

// // export default MyWeeklyResolutions;