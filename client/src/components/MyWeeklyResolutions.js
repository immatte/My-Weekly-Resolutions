import React, { useState, useEffect} from "react";
import "./MyWeeklyResolutions.css";
import DailyResolutionList from "./DailyResolutionList";
import resolutions from "../database.json";
import { Link } from "react-router-dom";
import FeatResolution from "./FeatResolution";


//HOW DO I SAY THAT THIS FUNCTION HAS TO PASS THE DAILY RESOLUTION LIST?

// function MyWeeklyResolutions() {
// const [weeklyResolutions, setWeeklyResolutions] = useState([]);
     

// useEffect (() => {
//     getWeeklyResolutions();
// }, []);

// function getWeeklyResolutions() {
//     fetch("/weeklyResolutions")
//         .then(response => response.json())
//         .then(weeklyResolutions => {
//          setWeeklyResolutions(weeklyResolutions);
                  
//         })
//         .catch(error => {
//         console.log(error);
//         });
//      }
                    
// async function addWeeklyResolution(newWeeklyResolution) {
// //   newDailyResolution.id = allDailyResolutions.length + 1; //to add an unique ID
// //   setAllDailyResolutions(allDailyResolutions => [...allDailyResolutions, newDailyResolution]);
//     console.log(newWeeklyResolution);
//     //Define fetch options
//          let options = {
//              method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(newWeeklyResolution)
//          };
                            
//         try {
//             let response = await fetch("/weeklyResolutions", options);
//             if (response.ok) {
//             let data = await response.json();
//             setWeeklyResolutions(data);
//              } else {
//                 console.log(`Server error: ${response.status}:
//                  ${response.statusText}`);
//                     }
//                 } catch (err) {
//                     console.log(`Network error: ${err.message}`);
//                     }
//                     }
export default function MyWeeklyResolutions() {
   return (
        <div>This is View 2
            {resolutions.map((resolution) => (
                <div key={resolution.id}>
                    <p>
                        <Link to={`/weeklyresolutions/${resolution.id}`}>{resolution.day}</Link>
                    </p>
                    {/* <p>{resolution.day}</p> */}
                    </div>
            ))}
            {/* {props.DailyResolutionList.map((resolution) => (
            <div key={resolution.id}>
            <h2>My Daily Resolutions for this week</h2>
        </div> 
 ))} */}
 {/* {resolutions.map((resolution) => (
    <div key={resolution.id}>
        <p>
            
        </div> 
 ))} */}
     </div> 
    );
   }
  

// export default MyWeeklyResolutions;