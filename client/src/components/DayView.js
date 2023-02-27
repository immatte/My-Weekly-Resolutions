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

  function getDays() { //I DON'T KNOW HOW TO SEE THE LIST OF DAYS OF THE TABLE DAYS
    fetch("/days")
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
        .catch (error =>  {
            console.log(`Error: ${error}`);
        });
}


function getResolutions() {
    fetch(`/days/${id}/resolutions`)
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
        .catch (error =>  {
            console.log(`Error: ${error}`);
        });
}
 
const addResolution = async text => {
    let newResolution = { text, complete: 0 };
    
    let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newResolution)
    };
    
    try {//I TRIED IT WITH :day_id, day_id, id and many other things...
        ///days/${id}/resolutions. This is how it works. See below...
        let response = await fetch(`/days/${id}/resolutions`, options);
        console.log(response);
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
    console.log(newResolution)
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
        let response = await fetch(`/days/${id}/resolutions/${id}`, options);
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
        let response = await fetch(`/days/${id}/resolutions/${id}`, options);
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
      <h3>YOUR {day?.name}'S RESOLUTIONS</h3>
     <div className="ResolutionList">
        <ResolutionList
        resolutions={resolutions}
        toggleDoneCb={id => updateResolution(id)}
        deleteCb={id => deleteResolution(id)}
        />
    <h3>Add a New Resolution</h3>
    <ResolutionForm addResolutionCb={text => addResolution(text)} />
    </div>
    </div> 
  );
}