import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTask } from "../features/taskSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("To Do");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      title,
      desc,
      status,
        };
    dispatch(addTask(newTask));
    setTitle(" ");
    setDesc(" ");
    setStatus("To Do");
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-3 text-indigo-500">
        Add New Task
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Task description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2  focus:ring-indigo-500"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-4">
        <select
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option className="To Do">To Do</option>
          <option className="In Progress">In Progress</option>
          <option className="Completed">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
