export const todosComplete = ({ todos, todosList, totalTodos }) =>
  totalTodos > 0
    ? todosList.filter(todo => todos[todo].isComplete === true)
    : [];
