'use client'
import Footer from "@components/Footer";
import Header from "@components/Header";
import Task from "@components/Task";
import TaskInput from "@components/TaskInput";

import { nanoid } from "nanoid";
import { useState } from "react";

export default function Home() {

  interface TaskItem {
    id: string,
    title: string,
    completed: boolean
  }

  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const addTask = (newTaskTitle:string) => {
    const newTask = { id: nanoid(), title: newTaskTitle, completed: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const deleteTask = (taskId:string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const toggleDoneTask = (taskId:string) => {
    const newTasks = structuredClone(tasks);
    const task = newTasks.find((x) => x.id === taskId);
    if(task != undefined){
      task.completed = !task.completed;
      setTasks(newTasks);}
  };

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* Task summary */}
        <p className="text-center text-secondary fst-italic">
          All ({tasks.length}) Done ({tasks.filter((x) => x.completed).length})
        </p>
        {/* task input */}
        <TaskInput addTaskFunc={addTask} />

        {/* tasks mapping*/}
        {tasks.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            deleteTaskFunc={deleteTask}
            toggleDoneTaskFunc={toggleDoneTask}
            completed={task.completed}
            key={task.id}
          />
        ))}
      </div>

      {/* //footer section */}
      <Footer year="2024" fullName="Paisit Lerdananpipat" studentId="660612155" />
    </div>
  );
}
