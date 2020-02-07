import { todosComplete } from "./../../helpers/todosComplete";
import { mockTodos } from "./../mockTodos";

const todosList = Object.keys(mockTodos);
describe("todosComplete", () => {
  const expected = ["Kate"];
  it("display todos marked as complete", () => {
    const outputAsArray = todosComplete({
      todos: mockTodos,
      todosList,
      totalTodos: todosList.length
    }).map(item => mockTodos[item].name);
    expect(outputAsArray).toEqual(expected);
  });
});
