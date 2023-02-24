import React from "react";
import "./MyWeeklyResolutions.css";


//HOW DO I SAY THAT THIS FUNCTION HAS TO PASS THE DAILY RESOLUTION LIST?
function MyWeeklyResolutions(props) {
    return (
              <div className="MyWeeklyResolutions">
                {props.dailyResolutionList}
            {/* <ul>
                {
                    props.dailyResolutions.map(r => (
                        <li key={r.id} className={r.done ? "done" : null}>
                            {r.day} {r.description} 
                            <button onClick={e => props.toggleDoneCb(r.id)} type="button">
                                DONE
                            </button>
                            <button onClick={e => props.deleteCb(r.id)} type="button">
                                DELETE
                            </button>
                        </li>
                    ))
                }
            </ul> */}
        </div>
    
    );
  }
  

export default MyWeeklyResolutions;