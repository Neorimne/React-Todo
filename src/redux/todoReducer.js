const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

export const todosSlice = createSlice ({
    name: 'todos',
    initialState,
    reducers: {
        addTask: {
            reducer(state, action)  {
                state.push(action.payload);
            },
            prepare(taskText) {
                    return {
                        payload: {
                            id: Date.now(),
                            taskText,
                            isCompleted: false
                        }
                    }
                }
            },
        toggleTask: (state, action) => {
            const targetTask = state.find(task => task.id === action.payload);
            targetTask.isCompleted = !targetTask.isCompleted;
        },
        removeTask: (state, action) => {
            state = state.filter(task => task.id !== action.payload);
            return state;
            
        },
        removeAllTasks: (state) => {
            state = [];
            return state;
        }
    }
});

export const getTasks = (state) => state.todos;
export const getCompletedTasks = (state) => state.todos.filter(task => task.isCompleted);
export const getInProgressTasks = (state) => state.todos.filter(task => !task.isCompleted);

export const { addTask, toggleTask, removeTask, removeAllTasks } = todosSlice.actions;

export default todosSlice.reducer;