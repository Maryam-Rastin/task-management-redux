import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filteredTasks: [],
  loading: false,
  error: null,
  status: "All",
};

export const fetchTodo = createAsyncThunk("tasks/fetchTodo", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const data = await response.json();
  return data.map((task) => ({
    id: task.id,
    title: task.title,
    desc: "",
    status: task.completed ? "Completed" : "To Do",
  }));
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, desc, status } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    showByStatus: (state, action) => {
      if (action.payload === "All") {
        state.filteredTasks = state.tasks;
      } else {
        state.filteredTasks = state.tasks.filter(
          (task) => task.status === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addTask, editTask, deleteTask, showByStatus } =
  taskSlice.actions;
export default taskSlice.reducer;
