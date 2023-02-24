// import React, { useState } from "react";
// import "./NewResolutionForm.css";
// //import DatePicker from "react-datepicker";

// const EMPTY_FORM = {
//     day: "",
//     description: "",
// };

// function NewResolutionForm(props) {
//     const [formData, setFormData] = useState(EMPTY_FORM);

//     function handleChange(event) {
//         //get the name of the field typed in and its value after the keystroke
//         const name = event.target.name;
//         const value = event.target.value;
        
//         let newFormData = {...formData};
//         newFormData[name] = value;
//         setFormData(formData => newFormData);

//  };

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     //the parent passed us a "addResolutionCb" prop; call it and pass the resolution object
//     //     props.addResolutionCb(formData);
//     //     setFormData(EMPTY_FORM); //to reset the form fields
//     // };

// function handleClick() {
//     props.addDailyResolutionCb(formData);
//     setFormData(EMPTY_FORM);
// }



// return (
//     //<div className="NewResolutionForm">
//         //<h2>Add New Resolution</h2>
         
//         <div className="NewResolutionForm">
          
//             <div>
//             <label for="day-select">Select a day:
//               <select name="day" id="day-select" onChange={handleChange}>
//                     <option value="">--Please select a day--</option>
//                     <option value="On Monday:">Monday</option>
//                     <option value="On Tuesday:">Tuesday</option>
//                     <option value="On Wednesday:">Wednesday</option>
//                     <option value="On Thursday:">Thursday</option>
//                     <option value="On Friday:">Friday</option>
//                     <option value="On Saturday:">Saturday</option>
//                     <option value="On Sunday:">Sunday</option>
//                  </select>
//             </label>

//             <label>
//                 Description:
//                 <input
//                 type="text"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 />
//             </label>
//             <button type="button" onClick={handleClick}>Add Daily Resolution</button>
            
//             </div>
//         </div>
//     );
// }



// export default NewResolutionForm;