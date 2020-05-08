
import {connect } from 'react-redux';
import  { updateNewTaskText, addTask, toggleIsCompleted, toggleIsNotCompleted, removeTask, removeAllTasks } from '../../redux/todoReducer';
import Todos from './Todos';

let mapStateToProps = (state) => {
    return {
        tasksData: state.todos.tasksData,
        taskNewText: state.todos.taskNewText,
        tasksCompleted: state.todos.tasksData.filter(element => element.isCompleted),
        tasksInProgress: state.todos.tasksData.filter(element => !element.isCompleted)
    }
};

const  TodosContainer = connect(mapStateToProps, {
    updateNewTaskText,
    addTask,
    toggleIsCompleted,
    toggleIsNotCompleted,
    removeTask,
    removeAllTasks
})(Todos);

export default TodosContainer;


