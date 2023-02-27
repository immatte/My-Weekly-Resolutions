import React from "react";
import days from "../database.json";
import { Link, Outlet } from "react-router-dom";
import "./DaysView.css";

export default function DaysView() {
  return (
    <div>
      <label className="span-2-cols">
      CLICK ON ONE OF THESE DAYS TO ADD OR SEE YOUR RESOLUTIONS FOR THAT DAY
      </label>
       <div className="DaysView">
    
      <div className="days">
  
      <label>
      {days.map((day) => (
        <div key={day.id}>
          <p>
            <Link to={`/days/${day.id}`}>{day.name}</Link>
          </p>
        </div>
      ))}
     </label>
    </div>
    <Outlet />
    </div>
    </div>
  );
}

