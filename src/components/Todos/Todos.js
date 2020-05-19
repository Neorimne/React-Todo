import React, { useState, useEffect } from 'react';
import style from './todos.module.css';
import TodoItem from './TodoItem';

const DEFAULT = 'default';
const SHOW_COMPLETED = 'SHOW_COMPLETED';
const SHOW_IN_PROGRESS = 'SHOW_IN_PROGRESS';


const Todos = (props) => {

    const newTaskElement = React.createRef();
    const [showState, setShowState] = useState(DEFAULT);
    const [todoArr, setTodoArr] = useState(props.tasksData);

    useEffect(() => {
        setTodoArr(props.tasksData);
    }, [props.tasksData]);

    useEffect(() => {
        switch (showState) {
            case DEFAULT: 
                setTodoArr(props.tasksData)
                break;
            case SHOW_COMPLETED: 
                setTodoArr(props.tasksCompleted)
                break;
            case SHOW_IN_PROGRESS: 
                setTodoArr(props.tasksInProgress)
                break;
        }
    }, [showState]);

    const addTask = () => {
        setTodoArr([...props.tasksData]);
        props.addTask();
    };

    const onTextChange = () => {
        let taskNewText = newTaskElement.current.value;
        props.updateNewTaskText(taskNewText);
    };

    const toggleEventHandler = (isCompleted, id) => {
        if (!isCompleted) props.toggleIsCompleted(id);
        else props.toggleIsNotCompleted(id)
    };
    let toDoItems = todoArr
        .map((element) => <TodoItem element={element}
            removeTask={props.removeTask}
            toggleEventHandler={toggleEventHandler}
            key={element.id} />);

    return (
        <div className={style.todosWrapper}>
            <div className={style.formWrapper}>
                <form onSubmit={(event) => event.preventDefault()} className={style.form}>
                    <label htmlFor="newTask">
                        NEW TASK
                </label>
                    <input id="newTask"
                        onChange={onTextChange}
                        value={props.taskNewText}
                        ref={newTaskElement}
                        type="text"
                    />
                    <button type="submit" onClick={addTask}>SUBMIT</button>
                </form>
            </div>
            <div className={style.buttonsWrapper}>
                <button onClick={() => { setShowState(DEFAULT) }}>Show ALL</button>
                <button onClick={() => { setShowState(SHOW_COMPLETED) }}>Show Completed</button>
                <button onClick={() => { setShowState(SHOW_IN_PROGRESS) }}>Show in Progress</button>
                <button onClick={() => { props.removeAllTasks() }}>Remove all</button>
            </div>
            <div className={style.todosItemsWrapper}>
                {toDoItems}
            </div>
        </div>
    )
}

export default Todos;