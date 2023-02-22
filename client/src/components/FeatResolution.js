import React from "react";
import './FeatResolution.css';

function FeatResolution(props) {
    let fr = props.featResolution2;

return (
    <div className="FeatResolution">
        <h2>{fr.title}</h2>
        <p>{fr.description}</p>
        {/* I want to show the title and also the days and
        the tasks corresponding to each day */}
    </div>
);
}

export default FeatResolution;