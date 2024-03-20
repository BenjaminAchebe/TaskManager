"use client"
import React from "react";

function TaskDetail({ task }) {
  return (
    <div className="task-detail">
      {/* Display task details */}
      <h2>{task.title}</h2>
      <p>{task.completed ? "Completed" : "Incomplete"}</p>
    </div>
  );
}

export default TaskDetail;
