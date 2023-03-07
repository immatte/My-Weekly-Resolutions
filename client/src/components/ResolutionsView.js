import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DaysView.css";
import "./ResolutionsView.css"


export default function ResolutionsView(props) {
    
    return (
        
        <div className="resolutionsView">
        <h3 id="myresolutionDay">MY RESOLUTIONS</h3>
        <div className="myresolutionList">
                <ul className="myresolList">
                    {props.resolutions.map(r => (
                        //adding a link to the DayViews
                            <li id="myresolItems" key={r.id} className={r.complete ? "complete" : null}>
                            <label >
                                    {/* toggleDoneCb button not working */}
                                    <button type="text" className="bi bi-check-square-fill" onClick={e => props.toggleDoneCb(r.id)}>
                                    ✔
                                    </button>
                                </label >
                                {r.text }
                                <label>
                                    {/* deleteCb button working */}
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