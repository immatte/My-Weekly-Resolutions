import React from "react";
import "./ResolutionList.css";
import { useParams } from "react-router-dom";

function ResolutionList(props) {
    const { id } = useParams();
    return (
        <div className="ResolutionList">
            <ul>
                {props.resolutions.map(r => (
                    +r.day_id === +id ?  
                    <li key={r.id} className={r.complete ? "complete" : null}>
                       <label>
                        <button type="text" class="btn btn-success" onClick={e => props.toggleDoneCb(r.id)}>
                            DONE
                        </button>
                        </label>
                        <label>
                        <button type="text" class="btn btn-danger" onClick={e => props.deleteCb(r.id)}>
                            DELETE
                        </button>
                        </label>
                        {r.text}
                    </li>
                : null 
                ))}
            </ul>
        </div>
    );
}

export default ResolutionList;