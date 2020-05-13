const UPDATE_TASK_TEXT = 'UPDATE_TASK_TEXT';
const ADD_TASK = 'ADD_TASK';
const TOGGLE_IS_COMPLETED = 'TOGGLE_IS_COMPLETED';
const TOGGLE_IS_NOT_COMPLETED = 'TOGGLE_IS_NOT_COMPLETED';
const REMOVE_TASK = 'REMOVE_TASK';
const REMOVE_ALL_TASKS = 'REMOVE_ALL_TASKS';

let initState = {
    tasksData: [],
    taskNewText: '',
};

const todoReducer = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_TASK_TEXT: 
            return {
                ...state,
                taskNewText: action.taskNewText
            };
        
        case ADD_TASK: 
            if (state.taskNewText === '') return state
            let task = {
                id : Date.now(),
                taskText: state.taskNewText,
                isCompleted: false
            }
            return {
                ...state,
                tasksData: [...state.tasksData, task],
                taskNewText: ''
            };
        case TOGGLE_IS_COMPLETED: 
            return {
                ...state,
                tasksData: state.tasksData.map(element => {
                    if (element.id === action.elementId){
                        return {...element, isCompleted: true}
                    }
                    return element;
                })
            };
        case TOGGLE_IS_NOT_COMPLETED: 
            return {
                ...state,
                tasksData: state.tasksData.map(element => {
                    if (element.id === action.elementId){
                        return {...element, isCompleted: false}
                    }
                    return element;
                })
            };
        case REMOVE_TASK: 
            return {
                ...state,
                tasksData: state.tasksData.filter(element => element.id !== action.elementId)  
                }
        case REMOVE_ALL_TASKS: 
            return {
                tasksData: [],
                taskNewText: ''
            }
        default:
            return state;
    }
};

export const updateNewTaskText = (taskNewText) => ({type: UPDATE_TASK_TEXT, taskNewText});
export const addTask = () => ({type: ADD_TASK});
export const toggleIsCompleted = (elementId) => ({type: TOGGLE_IS_COMPLETED, elementId });
export const toggleIsNotCompleted = (elementId) => ({type: TOGGLE_IS_NOT_COMPLETED, elementId});
export const removeTask = (elementId) => ({type: REMOVE_TASK, elementId});
export const removeAllTasks = () => ({type: REMOVE_ALL_TASKS})


export default todoReducer;