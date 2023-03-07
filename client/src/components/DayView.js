import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import days from "../database.json";
import ResolutionForm from "./DayView components/ResolutionForm";
import ResolutionList from "./DayView components/ResolutionList";

export default function DayView(props) {
  const { id } = useParams();
  const day = days.find((day) => +day.id === +id);
 
return (
    
    <div className="DayView">
      <h3 id="resolutionDay">YOUR {day?.name}'S RESOLUTIONS</h3>
     <div className="ResolutionList">
        <ResolutionList
        resolutions={props.resolutions}
        toggleDoneCb={id => props.updateResolution(id)}
        deleteCb={id => props.deleteResolution(id)}
        />
    <h3>Add a New Resolution</h3>
    <ResolutionForm addResolutionCb={(text) => props.addResolution(text,id)} />
    </div>
    </div> 
  );
}