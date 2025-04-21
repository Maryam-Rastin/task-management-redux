import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/taskSlice";

const EditTask = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.desc);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, title, desc, status }));
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <div className="absolute bg-white p-4 border rounded-md shadow-lg z-10">
          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            Edit Task
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
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-2 rounded-md hover:bg-indigo-700"
              onClick={handleEdit}
            >
              Save Changes
            </button>
            <button
              className="bg-gray-300 py-2 px-2 rounded-md"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default EditTask;
