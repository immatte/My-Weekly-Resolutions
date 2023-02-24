import React, { useState } from "react";
import "./AddDailyResolutionForm.css";

const EMPTY_FORM = {
    day: "",
    description: "",
};

function AddDailyResolutionForm(props) {
  const [formData, setFormData] = useState(EMPTY_FORM);

    function handleChange(event) {
        //get the name of the field typed in and its value after the keystroke
        let name = event.target.name;
        let value = event.target.value;
        
        let newFormData = {...formData};
        newFormData[name] = value;
        setFormData(formData => newFormData);
    };

    function handleSubmit(event) {
        event.preventDefault();
        //the parent passed us a "addResolutionCb" prop; call it and pass the resolution object
        props.addDailyResolutionCb(formData);
        setFormData(EMPTY_FORM); //to reset the form fields
    };
       
  return (
     
      <form className="AddDailyResolutionForm" onSubmit={handleSubmit}>
           
            <label for="day-select">Select a day:
              <select name="day" id="day-select" onChange={handleChange}>
                    <option value="">--Please select a day--</option>
                    <option value="MONDAY:">Monday</option>
                    <option value="TUESDAY:">Tuesday:</option>
                    <option value="WEDNESDAY:">Wednesday</option>
                    <option value="THURSDAY:">Thursday</option>
                    <option value="FRIDAY:">Friday</option>
                    <option value="SATURDAY:">Saturday</option>
                    <option value="SUNDAY:">Sunday</option>
                 </select>
            </label>
            
            <label>
                Description
                <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                />
            </label>

            <button type="submit">Add Daily Resolution</button>
        </form>      
    
    );
}

export default AddDailyResolutionForm;
