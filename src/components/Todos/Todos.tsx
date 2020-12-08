import React, { useState, useEffect } from "react";
import style from "./todos.module.css";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  getTasks,
  removeTask,
  toggleTask,
  removeAllTasks,
  getCompletedTasks,
  getInProgressTasks,
  ITask,
} from "../../redux/todoReducer";

const DEFAULT = "DEFAULT";
const SHOW_COMPLETED = "SHOW_COMPLETED";
const SHOW_IN_PROGRESS = "SHOW_IN_PROGRESS";

const Todos = () => {
  const dispatch = useDispatch();

  const allTasks = useSelector(getTasks);
  const completedTasks = useSelector(getCompletedTasks);
  const tasksInProgress = useSelector(getInProgressTasks);

  const [taskText, setTaskText] = useState("");
  const [showState, setShowState] = useState(DEFAULT);
  const [todoArr, setTodoArr] = useState<ITask[]>([]);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setTodoArr(allTasks);
  }, [allTasks]);

  useEffect(() => {
    switch (showState) {
      case DEFAULT:
        setTodoArr(allTasks);
        break;
      case SHOW_COMPLETED:
        setTodoArr(completedTasks);
        break;
      case SHOW_IN_PROGRESS:
        setTodoArr(tasksInProgress);
        break;
    }
  }, [showState, allTasks, completedTasks, tasksInProgress]);

  const TaskAdded = () => {
    if (!taskText) {
      setShowPopUp(true);
    } else {
      dispatch(addTask(taskText));
      setTodoArr(allTasks);
      setTaskText("");
    }
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };
  const removeTaskHandler = (taskId: number) => {
    dispatch(removeTask(taskId));
  };

  const toggleEventHandler = (taskId: number) => {
    dispatch(toggleTask(taskId));
  };

  const removeAllTasksHandler = () => {
    dispatch(removeAllTasks());
  };
  let toDoItems: Array<any> = [];

  if (todoArr) {
    toDoItems = todoArr.map((element: ITask) => (
      <TodoItem
        element={element}
        removeTask={removeTaskHandler}
        toggleEventHandler={toggleEventHandler}
        key={element.id}
      />
    ));
  }
  return (
    <div className={style.todosWrapper}>
      <div className={style.formWrapper}>
        <form
          onSubmit={(event) => event.preventDefault()}
          className={style.form}
        >
          <label htmlFor="newTask">NEW TASK</label>
          <div className={style.popup}>
            <span className={showPopUp ? style.popupShow : style.popuptext}>
              You should type tasks here!
            </span>
          </div>
          <input
            id="newTask"
            onChange={onTextChange}
            value={taskText}
            type="text"
          />
          <button type="submit" onClick={TaskAdded}>
            SUBMIT
          </button>
        </form>
      </div>
      <div className={style.buttonsWrapper}>
        <button
          onClick={() => {
            setShowState(DEFAULT);
          }}
        >
          Show ALL
        </button>
        <button
          onClick={() => {
            setShowState(SHOW_COMPLETED);
          }}
        >
          Show Completed
        </button>
        <button
          onClick={() => {
            setShowState(SHOW_IN_PROGRESS);
          }}
        >
          Show in Progress
        </button>
        <button onClick={removeAllTasksHandler}>Remove all</button>
      </div>
      <div className={style.todosItemsWrapper}>
        {toDoItems.length ? toDoItems : <div />}
      </div>
    </div>
  );
};

export default Todos;
