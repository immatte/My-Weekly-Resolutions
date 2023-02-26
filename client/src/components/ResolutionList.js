import React from "react";
import "./ResolutionList.css";

function ResolutionList(props) {
    return (
        <div className="ResolutionList">
            <ul>
                {props.resolutions.map(r => (
                    <li key={r.id} className={r.complete ? "complete" : null}>
                        <button type="text" class="btn btn-success" onClick={e => props.toggleDoneCb(r.id)}>
                            DONE
                        </button>
                        <button type="text" class="btn btn-danger" onClick={e => props.deleteCb(r.id)}>
                            DELETE
                        </button>
                        {r.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResolutionList;