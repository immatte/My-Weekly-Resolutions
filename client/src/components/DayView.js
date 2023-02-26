import React from "react";
import { useParams } from "react-router-dom";
import days from "../database.json";

export default function DayView() {
  const { id } = useParams();
 
//   const user = users.find((user) => Number(user.id) === Number(id));
  // shorter syntax for converting to a number
  const day = days.find((day) => +day.id === +id);
  
return (
    <div>
      <h2>YOUR {day?.name}'S RESOLUTIONS</h2>
    </div>
  );
}