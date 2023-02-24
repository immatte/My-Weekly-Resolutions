// import React, { useState } from "react";
import React from "react"
import "./ResolutionList.css";
//import FeatResolution from "./FeatResolution";

function ResolutionList(props) {
    return (
        <div className="ResolutionList">
            <ul>
                {
                    props.dailyResolutions.map(r => (
                        <li key={r.id} className={r.done ? "done" : null}>
                            {r.day} {r.description} {r.weekId}
                            <button onClick={e => props.toggleDoneCb(r.id)} type="button">
                                DONE
                            </button>
                            <button onClick={e => props.deleteCb(r.id)} type="button">
                                DELETE
                            </button>
                            </li>
                    ))
                }
            </ul>
        </div>
    );
}


{/* pass "featResolution1" prop from App to FeatResolution as "featResolution2"
            <FeatResolution featResolution2={props.featResolution1} />
            <ResolutionList
    resolutions2={props.resolutions1}
// pass callback from App down to ResolutionList; it gets called on user click
    showResolutionCb2={id => props.showResolutionCb1(id)}
            /> */}
      




export default ResolutionList;