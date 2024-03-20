"use client"
import React, { useState } from "react";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("New task:", title, completed);
    // Clear form fields
    setTitle("");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col whitespace-nowrap">
      
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
