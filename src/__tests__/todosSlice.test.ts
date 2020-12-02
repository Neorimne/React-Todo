import todos, {
  addTask,
  toggleTask,
  removeTask,
  removeAllTasks,
} from "../redux/todoReducer";

describe("todos reducer", () => {
  test("should handle initial state", () => {
    expect(todos(undefined, { type: "" })).toEqual([]);
  });
  test("should handle addTask action", () => {
    expect(
      todos([], {
        type: addTask.type,
        payload: {
          taskText: "Testing",
          id: 0,
          isCompleted: false,
        },
      })
    ).toEqual([
      {
        taskText: "Testing",
        id: 0,
        isCompleted: false,
      },
    ]);
  });
  test("should handle toggleTask action", () => {
    expect(
      todos([{ taskText: "Testing", id: 0, isCompleted: false }], {
        type: toggleTask.type,
        payload: 0,
      })
    ).toEqual([
      {
        taskText: "Testing",
        id: 0,
        isCompleted: true,
      },
    ]);
  });
  test("should handle removeTask action", () => {
    const testState = [
      { taskText: "Testing", id: 0, isCompleted: false },
      { taskText: "Testing2", id: 1, isCompleted: true },
    ];
    expect(
      todos(testState, {
        type: removeTask.type,
        payload: 1,
      })
    ).toEqual([{ taskText: "Testing", id: 0, isCompleted: false }]);
  });
  test("should handle removeAllTasks action", () => {
    const testState = [
      { taskText: "Testing", id: 0, isCompleted: false },
      { taskText: "Testing2", id: 1, isCompleted: true },
    ];
    expect(
      todos(testState, {
        type: removeAllTasks.type,
      })
    ).toEqual([]);
  });
});
