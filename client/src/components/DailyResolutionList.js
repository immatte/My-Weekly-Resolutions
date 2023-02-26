// import React, { useState } from "react";
// import React from "react"
// import "./DailyResolutionList.css";
// import FeatResolution from "./FeatResolution";
// //import DailyResolutionList from "database.json";

// function DailyResolutionList(props) {
//     return (
//         <div className="DailyResolutionList">IS THIS USER VIEW??
//             <ul>
//                 {props.allDailyResolutions.map(dr => (
//                     // <li key={dr.id}> className={dr.done ? "done" : null>
//                     // {dr.day} {dr.description} 
//                     //     <button 
//                     //         type="button"
//                     //         title="toggleDone"
//                     //         onClick={e => props.toggleDoneDRCb(dr.id)}
//                     //         >
//                     //         DONE
//                     //     </button>

//                     //     <button
//                     //         type="button"
//                     //         title="delete"
//                     //         onClick={e => props.deleteDRCb(dr.id)}
//                     //         >
//                     //         DELETE
//                     //     </button>
//                     //     {dr.title} {dr.day} {dr.description}
//                     // </li> 
                
//                         <li key={dr.id} className={dr.done ? "done" : null}>
//                             {dr.title} {dr.day} {dr.description} 
//                             <button onClick={e => props.toggleDoneDRCb(dr.id)} type="button">
//                                 DONE
//                             </button>
//                             <button onClick={e => props.deleteDRCb(dr.id)} type="button">
//                                 DELETE
//                             </button>
//                         </li>
//                     ))}
                
//             </ul>
//         </div>
//     );
// }



// export default DailyResolutionList;