import React from 'react';
import style from './todos.module.css';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    return (
            <div key={props.element.id} 
            className={style.todoItem}
            style={props.element.isCompleted ? {backgroundColor: "rgba(80, 209, 245, 0.452)"} :{ backgroundColor: "rgba(196, 49, 13, 0.692)"}}
            >  
             <div className={style.itemButton} >
                        <button 
                                onClick={ 
                                    () => {props.toggleEventHandler(props.element.id)}
                                    }>{props.element.isCompleted ? "IN PROGRESS" : "COMPLETED"}
                        </button>
                    </div>

               <div className={style.itemButton}>
                    <button className={style.removeButton} 
                        onClick={ () => {props.removeTask(props.element.id)}}>
                        REMOVE</button>
               </div>
               <div className={style.taskText}>{props.element.taskText}</div> 
            </div> 
    )
};

TodoItem.propTypes = {
    element: PropTypes.object,
    toggleEventHandler: PropTypes.func,
    removeTask: PropTypes.func,
}

export default TodoItem;