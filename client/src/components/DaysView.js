import React from "react";
import days from "../database.json";
import { Link, Outlet } from "react-router-dom";

export default function DaysView() {
  return (
    <div>
      DAYS
      {days.map((day) => (
        <div key={day.id}>
          <p>
            <Link to={`/days/${day.id}`}>{day.name}</Link>
          </p>
        </div>
      ))}
      <Outlet />
    </div>
  );
}