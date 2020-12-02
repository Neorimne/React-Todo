import { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export interface ITask {
  id: number;
  taskText: string;
  isCompleted: boolean;
}

export const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Array<ITask>,
  reducers: {
    addTask: {
      reducer(state: Array<ITask>, action: PayloadAction<ITask>) {
        state.push(action.payload);
      },
      prepare(taskText: string) {
        return {
          payload: {
            id: Date.now(),
            taskText,
            isCompleted: false,
          },
        };
      },
    },
    toggleTask: (state: Array<ITask>, action: PayloadAction<number>) => {
      const targetTask = state.find((task) => task.id === action.payload);
      if (targetTask) targetTask.isCompleted = !targetTask.isCompleted;
    },
    removeTask: (state: Array<ITask>, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload);
      return state;
    },
    removeAllTasks: (state: Array<ITask>) => {
      state = [];
      return state;
    },
  },
});

export const getTasks = (state: RootState) => {
  return state.todos;
};
export const getCompletedTasks = (state: RootState) =>
  state.todos.filter((task: ITask) => task.isCompleted);
export const getInProgressTasks = (state: RootState) =>
  state.todos.filter((task: ITask) => !task.isCompleted);

export const {
  addTask,
  toggleTask,
  removeTask,
  removeAllTasks,
} = todosSlice.actions;

export default todosSlice.reducer;
