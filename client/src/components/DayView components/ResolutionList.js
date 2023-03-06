import React from "react";
import "./ResolutionList.css";
import { useParams } from "react-router-dom";

function ResolutionList(props) {
    const { id } = useParams();
    return (
        <div className="ResolutionList">
            <ul className="resolList">
                {props.resolutions.map(r => (
                    +r.day_id === +id ?  
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
    );
}

export default ResolutionList;