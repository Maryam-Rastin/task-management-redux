import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, showByStatus, fetchTodo } from "../features/taskSlice";
import EditTask from "./EditTask";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filteredTasks = useSelector((state) => state.tasks.filteredTasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleStatus = (status) => {
    dispatch(showByStatus(status));
  };

  if (loading) {
    return <p>Tasks Loading...</p>;
  }
  if (error) {
    return <p>There is an error {error}</p>;
  }

  return (
    <div>
      <div>
        <select
          className="mt-0 float-end px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => handleStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
      </div>

      <div className="mt-5">
        <h2 className="mb-2">Tasks</h2>
        <ul className="space-y-4">
          {(filteredTasks.length > 0 ? filteredTasks : tasks).map((task) => (
            <li
              key={task.id}
              className={
                "p-3 rounded-md shadow-sm flex justify-between item-center"
              }
            >
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {task.title}
                </h3>
                {task.desc && <p className="text-gray-600">{task.desc}</p>}
                <p className="mt-1 text-sm font-semibold">
                  <span
                    className={`italic underline ${
                      task.status === "To Do"
                        ? "text-orange-500"
                        : task.status === "In Progress"
                        ? "text-purple-500"
                        : task.status === "Completed"
                        ? "text-green-500"
                        : "text-gray-800"
                    }`}
                  >
                    Status: {task.status}
                  </span>
                </p>
              </div>
              <div className="flex space-x-2">
                <EditTask task={task} />
                <button
                  className="w-fit h-fit px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(task.id)}
                >
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
