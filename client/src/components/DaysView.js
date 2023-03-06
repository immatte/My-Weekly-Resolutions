import React from "react";
import days from "../database.json";
import { Link, Outlet } from "react-router-dom";
import "./DaysView.css";

export default function DaysView() {
  return (
    <div className="daysList">
      <label className="span-2-cols">
      <h5>Click on one of these days to add your resolutions</h5>
      </label>
       <div className="DaysView">
    
      <div className="days">
  
      <label className="span-2-cols">
      {days.map((day) => (
        <div className="day" key={day.id}>
          <p>
            <Link className="daybutton" to={`/days/${day.id}`}>{day.name}</Link>
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

