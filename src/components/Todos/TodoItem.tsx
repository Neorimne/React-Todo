import React from "react";
import style from "./todos.module.css";
import { ITask } from "../../redux/todoReducer";

export type TodoItemProps = {
  element: ITask;
  toggleEventHandler: (id: number) => void;
  removeTask: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  element,
  toggleEventHandler,
  removeTask,
}) => {
  return (
    <div
      key={element.id}
      className={style.todoItem}
      style={
        element.isCompleted
          ? { backgroundColor: "rgba(80, 209, 245, 0.452)" }
          : { backgroundColor: "rgba(196, 49, 13, 0.692)" }
      }
    >
      <div className={style.itemButton}>
        <button
          onClick={() => {
            toggleEventHandler(element.id);
          }}
        >
          {element.isCompleted ? "IN PROGRESS" : "COMPLETED"}
        </button>
      </div>

      <div className={style.itemButton}>
        <button
          className={style.removeButton}
          onClick={() => {
            removeTask(element.id);
          }}
        >
          REMOVE
        </button>
      </div>
      <div className={style.taskText}>{element.taskText}</div>
    </div>
  );
};

export default TodoItem;
