import React from "react";

interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  deleteTaskFunc: (taskId: string) => void;
  toggleDoneTaskFunc: (taskId: string) => void;
}

export default function Task({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}: TaskItemProps) {

  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const doneBtnOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span className={completed?"line-through":""}>{title}</span>
      <button className="btn btn-success" onClick={doneBtnOnClick}>Done</button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
}
