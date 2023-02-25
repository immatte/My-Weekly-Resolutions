import React from "react";
import './FeatResolution.css';
import { useParams } from "react-router-dom";
import resolutions from "../database.json";

function FeatResolution() {
    const { id } = useParams();
    const resolution = resolutions.find((resolution) => +resolution.id === +id);
  
return (
    <h2>{resolution?.day}'s page</h2>
    // <div className="FeatResolution">
    //     <h2>{fr.title}</h2>
    //     <p>{fr.description}</p>
    //     {/* I want to show the title and also the days and
    //     the tasks corresponding to each day */}
   
);
}

export default FeatResolution;