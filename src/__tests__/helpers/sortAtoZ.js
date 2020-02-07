import { sortAtoZ } from "./../../helpers/sortAtoZ";
import { mockTodos } from "./../mockTodos";

const toDoList = Object.keys(mockTodos);
describe("sortAtoZ", () => {
  const expected = ["Kate", "Richard", "Sam"];
  it("sort array alphabetically from a to z", () => {
    const outputAsArray = toDoList
      .sort(sortAtoZ("name", mockTodos))
      .map(item => mockTodos[item].name);
    expect(outputAsArray).toEqual(expected);
  });
});
