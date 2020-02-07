import React from "react";
import shortid from "shortid";
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO_STATUS,
  DEFAULT_PRIORITY
} from "./constants";
import { toggleItem } from "../helpers/toggleItem";

const TodoContext = React.createContext();
const initialState = { todos: {} };

function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: {
          ...state.todos,
          [shortid.generate()]: {
            name: action.value,
            isComplete: false,
            priority: DEFAULT_PRIORITY
          }
        }
      };
    }
    case DELETE_TODO: {
      const newTodos = Object.keys(state.todos)
        .filter(id => id !== action.id)
        .reduce(
          (obj, id) => ({
            ...obj,
            [id]: state.todos[id]
          }),
          {}
        );
      return {
        ...state,
        todos: newTodos
      };
    }
    case UPDATE_TODO_STATUS: {
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.id]: {
            ...state.todos[action.id],
            [action.field]:
              action.field === "isComplete"
                ? toggleItem(state.todos[action.id][action.field])
                : action.newValue
          }
        }
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function TodoProvider(props) {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);

  return <TodoContext.Provider value={value} {...props} />;
}

function useTodo() {
  const context = React.useContext(TodoContext);
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
