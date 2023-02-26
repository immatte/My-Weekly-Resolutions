 import React, { useState } from "react";
 import "./ResolutionForm.css";

function ResolutionForm(props) {
 let [input, setInput] = useState("");

 const handleChange = event => {
    setInput(event.target.value);
 };

 const handleSubmit = event => {
    event.preventDefault();
    props.addResolutionCb(input);
    setInput("");
 };

return (
    <div className="ResolutionForm">
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    New Resolution
                    <input type="text" value={input} onChange={e => handleChange(e)} />
                </label>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>
);
}

export default ResolutionForm;
