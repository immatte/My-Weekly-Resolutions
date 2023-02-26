import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import days from "../database.json";
import ResolutionForm from "./ResolutionForm";
import ResolutionList from "./ResolutionList";
import "./DayView.css";

export default function DayView() {
  const { id } = useParams();
  const day = days.find((day) => +day.id === +id);
  let [resolutions, setResolutions] = useState([]);
 
  useEffect(() => {
    getResolutions();
  }, []);

function getResolutions() {
    fetch("/days/resolutions")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(
                    `Server error: ${response.status}: ${response.statusText}`
                );
            }
        })
        .then(data => {
            setResolutions(data);
        })
}
 
const addResolution = async text => {
    let newResolution = { text, complete: false };
    
    let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newResolution)
    };

    try {
        let response = await fetch("/days/resolutions", options);
        if (response.ok) {
            let data = await response.json();
            setResolutions(data);
        } else {
            console.log(`Server error: ${response.status}:
            ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Network error: ${err.message}`);
    }
};

const updateResolution = async id => {
    let resolution = resolutions.find(r => r.id === id);
    resolution.complete = !resolution.complete;

    let options = {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(resolution)
    };

    try {
        let response = await fetch(`/days/resolutions/${id}`, options);
        if (response.ok) {
            let data = await response.json();
            setResolutions(data);
        } else {
            console.log(`Server error: ${response.status}:
            ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Network error: ${err.message}`);
    }
};

const deleteResolution = async id => {
   
    let options = {
        method: "DELETE"
     };

    try {
        let response = await fetch(`/days/resolutions/${id}`, options);
        if (response.ok) {
            let data = await response.json();
            setResolutions(data);
        } else {
            console.log(`Server error: ${response.status}:
            ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Network error: ${err.message}`);
    }
};

return (
    <div className="DayView">
      <h2>YOUR {day?.name}'S RESOLUTIONS</h2>
        <ResolutionList
        resolutions={resolutions}
        toggleDoneCb={id => updateResolution(id)}
        deleteCb={id => deleteResolution(id)}
        />

    <h2>Add a New Resolution</h2>
    <ResolutionForm addResolutionCb={text => addResolution(text)} />
    </div>
  );
}