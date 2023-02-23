import React, { useState } from "react";
import "./NewResolutionForm.css";
//import DatePicker from "react-datepicker";

const EMPTY_FORM = {
    title: "",
    date: "",
    day: "",
    description: "",
};

function NewResolutionForm(props) {
    const [formData, setFormData] = useState(EMPTY_FORM);

    function handleChange(event) {
        //get the name of the field typed in and its value after the keystroke
        const name = event.target.name;
        const value = event.target.value;
        
        let newFormData = {...formData};
        newFormData[name] = value;
        setFormData(formData => newFormData);

        //overwrite the property name (title, description) with value
        // setResolution((state) => ({
        //     ...state,
        //     [name]: value,
        // }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //the parent passed us a "addResolutionCb" prop; call it and pass the resolution object
        props.addResolutionCb(formData);
        setFormData(EMPTY_FORM); //to reset the form fields
    };


return (
    //<div className="NewResolutionForm">
        //<h2>Add New Resolution</h2>
         
        <form className="NewResolutionForm" onSubmit={handleSubmit}>
           <label>
                Select Date
                <input 
                type="week"
                name="date"
                value={formData.date}
                onChange={handleChange}/>
            </label>
                {/* <Datepicker
                    controls={['calendar']}
                    select="preset-range"
                    firstSelectDay={1}
                    selectSize={7}
                /> */}
           
                                
            <label>
                Title
                <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                />
            </label>
            

            <div>
            <label for="day-select">Select a day:
              <select name="day" id="day-select" onChange={handleChange}>
                    <option value="">--Please select a day--</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
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
            
            </div>
        </form>
    );
}



export default NewResolutionForm;