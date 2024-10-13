import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskdetails/taskDetails";

export const store = configureStore({
  reducer: {
    taskDetails: taskReducer,
  },
});
