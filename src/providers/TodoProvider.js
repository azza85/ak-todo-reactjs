import React from "react";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO_STATUS } from "./constants";
import { todoReducer } from "./todoReducer";

const TodoContext = React.createContext();
const initialState = { todos: {} };

function TodoProvider(props) {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);

  return <TodoContext.Provider value={value} {...props} />;
}

function useTodo(MyContent = TodoContext) {
  const context = React.useContext(MyContent);
  if (!context) {
    throw new Error(`must be used within a Provider`);
  }
  const [state, dispatch] = context;

  const addTodo = value =>
    dispatch({
      type: ADD_TODO,
      value
    });
  const deleteTodo = id =>
    dispatch({
      type: DELETE_TODO,
      id
    });

  const updateTodoStatus = (id, field, newValue = 0) =>
    dispatch({
      type: UPDATE_TODO_STATUS,
      id,
      field,
      newValue
    });
  return {
    state,
    addTodo,
    deleteTodo,
    updateTodoStatus
  };
}

export { TodoProvider, useTodo };
