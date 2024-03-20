"use client"
import React, { useState, useEffect } from "react";
import { getTasks } from "./tasks";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const tasksData = await getTasks();
      setTasks(tasksData);
    }
    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col justify-center bg-white rounded-3xl">
       <div className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
        {/* Your task list UI here */}
        {/* Iterate over tasks to display */}
      </div>
    </div>
  );
}

export default TaskList;



