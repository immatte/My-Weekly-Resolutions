import React, { useState } from "react";
import NewResolutionForm from "./components/NewResolutionForm";
import ResolutionList from "./components/ResolutionList";

import "./App.css";

//function App() {
//I want that the form view is set if there is no resolutions for that week yet
//const [noResolutions, setResolution] = useState(false);
//I want to show the resolution list if there is one or more resolutions
//const [resolutions, setResolutionList] = useState([]);
//I don't know what to put inside the () in useState or even if I need that
//but if not, what should I write after = in lines 11 and 14?
//const [featResolution, setFeatResolution] = useState({});
// const handleAddResolution = (newResolution) => {
//   //I want to add a unique id to each weekly resolution.
//   newResolution.id = resolutions.length + 1;
//   setResolution((state) => [...state, newResolution]);
// };

// const handleChangeView = (noResolutions) => {
//   setResolution(noResolutions);
// }

// //This is called when the user clicks on a resolution
// function showResolution(id) {
//   let selectResolution = resolutions.find(r => r.id === id);
//   setFeatResolution(selectResolution);
// }

const EMPTY_FORM = {
  title: "",
  date: "",
};

function App() {
  const [allResolutions, setAllResolutions] = useState([]);
  const [weeklyResolutions, setWeeklyResolutions] = useState([]);

  const [formData, setFormData] = useState(EMPTY_FORM);

  function addResolution(newResolution) {
    newResolution.id = allResolutions.length + 1; //to add an unique ID

    //push on the allResolutions array
    let newAllResolutions = [...allResolutions];
    newAllResolutions.push(newResolution);
    setAllResolutions((allResolutions) => newAllResolutions);
  }

  function toggleDone(id) {
    //make a copy of state
    let newAllResolutions = [...allResolutions];
    //find the resolution to modify
    let resolution = newAllResolutions.find((r) => r.id === id);
    //toggle the "done" property
    resolution.done = !resolution.done;
    //update state
    setAllResolutions((allResolutions) => newAllResolutions);
  }

  function deleteResolution(id) {
    //make copy of state and remove resolution in same step
    let newAllResolutions = allResolutions.filter((r) => r.id !== id);
    //update state
    setAllResolutions((allResolutions) => newAllResolutions);
  }

  function handleChange(event) {
    //get the name of the field typed in and its value after the keystroke
    const name = event.target.name;
    const value = event.target.value;

    let newFormData = { ...formData };
    newFormData[name] = value;
    setFormData((formData) => newFormData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("a punto de enviar al backend");

    const allInfo = {
      title: formData.title,
      date: formData.date,
      resolutions: allResolutions,
    };

    await fetch("/api/resolutions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allInfo),
    });

    console.log(allInfo);
  };

  return (
    <div className="App">
      <h1>MY WEEKLY RESOLUTIONS</h1>

      <h2>My resolutions for this week</h2>
      <ResolutionList
        resolutions={allResolutions}
        toggleDoneCb={(id) => toggleDone(id)}
        deleteCb={(id) => deleteResolution(id)}
      />

      <form onSubmit={handleSubmit}>
        <label>
          Select Date
          <input
            type="week"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>

        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add weekly Resolution</button>
      </form>

      <h2>Add a New Daily Resolution</h2>
      {/* Pass function to child component: call this function when user submits form */}
      <NewResolutionForm addResolutionCb={(nr) => addResolution(nr)} />
    </div>
  );
}

//  <nav>
//   <button className = { noResolutions ? 'active' : null } on onClick={() =>
//   handleChangeView(true)}>ADD NEW RESOLUTION</button>
//   <button className = { !noResolutions ? 'active' : null } on onClick={() =>
//   handleChangeView(false)}>MY RESOLUTIONS FOR THIS WEEK</button>
// </nav>

//   (noResolutions)
//   //pass down callback to add new resolution
//   ? <NewResolutionForm addResolutionCb={ (newResolution) => handleAddResolution(newResolution)} />
//   //pass down callback of the resolution list, I think
//   : <ResolutionList
//       resolutions1={resolutions}
//       featResolution1={featResolution}
//       showResolutionCb1={id => showResolution(id)}
//   />
//  }

export default App;
