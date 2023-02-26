// import React, { useEffect, useState } from "react";
// import './FeatResolution.css';
// import { useParams } from "react-router-dom";
// import resolutions from "../database.json";
// import DailyResolutionList from "./DailyResolutionList";
// import AddDailyResolutionForm from "./AddDailyResolutionForm";

// // const EMPTY_FORM = {
// //     description: "",
// // };


// // //function AddDailyResolutionForm(props) {

// // function FeatResolution(props) {
// //     const { id } = useParams();
// //     const resolution = resolutions.find((resolution) => +resolution.id === +id);

// //     const [formData, setFormData] = useState(EMPTY_FORM);

// //     function handleChange(event) {
// //         //get the name of the field typed in and its value after the keystroke
// //         // let name = event.target.name;
// //         // let value = event.target.value;
        
// //         // let newFormData = {...formData};
// //         // newFormData[name] = value;
// //         // setFormData(formData => newFormData);
// // let { name, value } = event.target;
// // setFormData(formData => ({ ...formData, [name]: value }));

// //     };

// //     function handleSubmit(event) {
// //         event.preventDefault();
// //         //the parent passed us a "addResolutionCb" prop; call it and pass the resolution object
// //         props.FeatResolutionFormCb(formData);
// //         setFormData(EMPTY_FORM); //to reset the form fields
// //     };
// // //I'm going to try to change the submit for onclick and add a submit later, maybe
// //     // function handleClick() {
// //     //     props.addDailyResolutionCb(formData);
// //     //     setFormData(EMPTY_FORM);
// //     // }
    
    


// function FeatResolution() {
//     const [allDailyResolutions, setAllDailyResolutions] = useState([]);
//     const { id } = useParams();
//     const resolution = resolutions.find((resolution) => +resolution.id === +id);

// //     const [formData, setFormData] = useState(EMPTY_FORM);
//    // const [weeklyResolutions, setWeeklyResolutions] = useState([]);
//     // const [DRF, setDRF] = useState(false); //to use WR first
  
//   // const handleChangeView = (DRF) => {
//   //   setDRF(DRF);
//   // }
  
  
//   useEffect(() => {
//     getAllDailyResolutions();
//   }, []);
  
//   function getAllDailyResolutions() {
//     fetch("/dailyResolutions")
//       .then(response => response.json())
//       .then(allDailyResolutions => {
//         setAllDailyResolutions(allDailyResolutions);
  
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
  
//   // function getWeeklyResolutions() {
//   //   fetch("/weeklyResolutions")
//   //     .then(response => response.json())
//   //     .then(weeklyResolutions => {
//   //       setWeeklyResolutions(weeklyResolutions);
  
//   //     })
//   //     .catch(error => {
//   //       console.log(error);
//   //     });
//   // }
//   useEffect(() => {
//     addDailyResolution();
//   }, []);
  
//     async function addDailyResolution(newDailyResolution) {
//     //   newDailyResolution.id = allDailyResolutions.length + 1; //to add an unique ID
//     //   setAllDailyResolutions(allDailyResolutions => [...allDailyResolutions, newDailyResolution]);
//       console.log(newDailyResolution);
//     //Define fetch options
//       let options = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newDailyResolution)
//       };
      
//       try {
//         let response = await fetch("/dailyResolutions", options);
//         if (response.ok) {
//           let data = await response.json();
//           setAllDailyResolutions(data);
//         } else {
//           console.log(`Server error: ${response.status}:
//           ${response.statusText}`);
//         }
//         } catch (err) {
//           console.log(`Network error: ${err.message}`);
//         }
//         }
      
//         // async function addWeeklyResolution(newWeeklyResolution) {
//         //   //   newDailyResolution.id = allDailyResolutions.length + 1; //to add an unique ID
//         //   //   setAllDailyResolutions(allDailyResolutions => [...allDailyResolutions, newDailyResolution]);
//         //     console.log(newWeeklyResolution);
//         //   //Define fetch options
//         //     let options = {
//         //       method: "POST",
//         //       headers: { "Content-Type": "application/json" },
//         //       body: JSON.stringify(newWeeklyResolution)
//         //     };
            
//         //     try {
//         //       let response = await fetch("/weeklyResolutions", options);
//         //       if (response.ok) {
//         //         let data = await response.json();
//         //         setWeeklyResolutions(data);
//         //       } else {
//         //         console.log(`Server error: ${response.status}:
//         //         ${response.statusText}`);
//         //       }
//         //       } catch (err) {
//         //         console.log(`Network error: ${err.message}`);
//         //       }
//         //       }
  
  
  
//     function toggleDoneDR(id) { //DR=Daily Resolution
//       //make a copy of state
//       let newAllDailyResolutions = [...allDailyResolutions];
//       //find the resolution to modify
//       let dailyResolution = newAllDailyResolutions.find(dr => dr.id === id);
//       //toggle the "done" property
//       dailyResolution.done = !dailyResolution.done;
//       //update state
//       setAllDailyResolutions(allDailyResolutions => newAllDailyResolutions);
//     }
  
//     async function deleteDR(id) { //DR=Daily Resolution
//       //make copy of state and remove resolution in same step
//     // let newAllDailyResolutions = allDailyResolutions.filter(r => r.id !== id);
//     // //update state
//     // setAllDailyResolutions(allDailyResolutions => newAllDailyResolutions);
//     let options = {
//       method: "DELETE"
//     };
    
//     try {
//       let response = await fetch (`/dailyResolutions/${id}`, options);
//       if (response.ok) {
//         let data = await response.json();
//         setAllDailyResolutions(data);
//       } else {
//         console.log(`Server error: ${response.status}:
//        ${response.statusText} `);
//       }
//       } catch (err) {
//         console.log(`Network error: ${err.message}`);
//       }
//     }


// return (
   
//     <div className="FeatResolution">This is View 1
      
//        <h2>{resolution?.day}'s page</h2>
//        <div id="app-grid">
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
  

//     );
// }

// export default FeatResolution;