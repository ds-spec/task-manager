import { createSlice } from "@reduxjs/toolkit";

export const taskDetails = createSlice({
  name: "taskDetails",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTaskCard: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTaskCard } = taskDetails.actions;
export default taskDetails.reducer;
