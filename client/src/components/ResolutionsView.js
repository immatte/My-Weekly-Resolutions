import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import days from "../database.json";
import ResolutionList from "./DayView components/ResolutionList";
import "./DayView.css";
import Local from "../helpers/Local";

export default function DayView(props) {
  let daysStr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];


return (
    
    <div className="DayView">
      <h3 id="resolutionDay">MY RESOLUTIONS</h3>
      <div className="ResolutionList">

            <ul className="resolList">
            {props.resolutions.map(r => (
                //check if possible to add the day weeks as references
                //check css for completed
                    <li id="resolItems" key={r.id} className={r.complete ? "complete" : null}>
                       <label >
                            <button type="text" className="bi bi-check-square-fill" onClick={e => props.toggleDoneCb(r.id)}>
                            ✔
                            </button>
                        </label >
                        {r.text }
                        <label>
                            <button type="text" className="btn btn-danger" onClick={e => props.deleteCb(r.id)}>
                                X
                            </button>
                        </label>
    
                    </li>
                    
                : null 
                ))}
            </ul>
        </div>
    </div> 
  );
}