import React from "react";
import { useTodo } from "./providers/TodoProvider";
import AppBarWrap from "./components/AppBarWrap";
import InputWrap from "./components/InputWrap";
import MenuWrap from "./components/MenuWrap";
import ListWrap from "./components/ListWrap";
import SortIcon from "@material-ui/icons/Sort";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./styles.css";
import { sortBy } from "./helpers/sortBy";
import { todosComplete } from "./helpers/todosComplete";

export default function App() {
  const { state, addTodo, deleteTodo, updateTodoStatus } = useTodo();
  const [sortKey, setSortKey] = React.useState("");
  const filterOptiones = [
    {
      label: "Name",
      key: "name",
      action: () => setSortKey("name")
    },
    {
      label: "Priority",
      key: "priority",
      action: () => setSortKey("priority")
    }
  ];
  const [newTodo, setNewTodo] = React.useState("");
  const addNewTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };
  const todos = state.todos;
  const todosList = Object.keys(todos);
  const totalTodos = todosList.length;
  const getTodosComplete = todosComplete({ todos, todosList, totalTodos });
  const todosCompleteCount = totalTodos > 0 ? getTodosComplete.length : 0;

  const todosStatus =
    totalTodos > 0 ? ` - (${todosCompleteCount}/${totalTodos}) complete` : "";

  const sortedToList =
    sortKey !== "" ? sortBy(todosList, todos, sortKey) : todosList;

  const priorityList = todo =>
    [1, 2, 3, 4, 5].map(num => ({
      label: `P${num}`,
      key: num,
      action: () => updateTodoStatus(todo, "priority", num)
    }));
  const listOptiones = todo => [
    ...priorityList(todo),
    {
      label: "Delete",
      key: "delete",
      action: () => deleteTodo(todo)
    }
  ];
  return (
    <div className="app-wrap">
      <AppBarWrap
        title={`Todo List ${todosStatus}`}
        rightContent={
          <MenuWrap
            label={<SortIcon style={{ color: "white" }} />}
            id="sort"
            options={filterOptiones}
          />
        }
      />
      <InputWrap
        label="Add Todo"
        id="addTodo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        action={addNewTodo}
      />
      {totalTodos > 0 ? (
        <div className="list-wrap">
          <ListWrap
            items={sortedToList.map(todo => ({
              todo,
              key: todo,
              data: todos[todo],
              updateTodoStatus,
              secondary: (
                <MenuWrap
                  key={todo}
                  label={<MoreVertIcon />}
                  id={`more-${todo}`}
                  options={listOptiones(todo)}
                />
              )
            }))}
          />
        </div>
      ) : null}
    </div>
  );
}
