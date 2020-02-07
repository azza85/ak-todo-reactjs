import shortid from "shortid";
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO_STATUS,
  DEFAULT_PRIORITY
} from "./constants";

import { toggleItem } from "../helpers/toggleItem";

export function todoReducer(state, action) {
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
