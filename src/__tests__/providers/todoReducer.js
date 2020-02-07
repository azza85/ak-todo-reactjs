import { todoReducer } from "./../../providers/todoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO_STATUS
} from "./../../providers/constants";

import { mockTodos } from "./../../__mock__/mockTodos";

const initialState = {
  todos: {}
};

const deleteInitialState = {
  todos: mockTodos
};

const completeInitialState = {
  todos: mockTodos
};
describe("todoReducer", () => {
  it("ADD_TODO", () => {
    const addTodo = todoReducer(initialState, {
      type: ADD_TODO,
      value: "aaa"
    });
    expect(Object.keys(addTodo)).toHaveLength(1);
  });
  it("DELETE_TODO", () => {
    const deleteTodo = todoReducer(deleteInitialState, {
      type: DELETE_TODO,
      id: "2"
    });
    expect(deleteTodo).toMatchObject({
      todos: {
        "1": { isComplete: false, name: "Richard", priority: 3 },
        "3": { isComplete: false, name: "Sam", priority: 2 }
      }
    });
  });
  it("UPDATE_TODO_STATUS", () => {
    const markAsComplete = todoReducer(completeInitialState, {
      type: UPDATE_TODO_STATUS,
      id: "2",
      field: "priority",
      newValue: 4
    });
    expect(markAsComplete).toMatchObject({
      todos: {
        "1": { isComplete: false, name: "Richard", priority: 3 },
        "2": { isComplete: true, name: "Kate", priority: 4 },
        "3": { isComplete: false, name: "Sam", priority: 2 }
      }
    });
  });
});
