import { sortLowestToHighest } from "./../helpers/sortLowestToHighest";
import { mockTodos } from "./mockTodos";

const toDoList = Object.keys(mockTodos);
describe("sortLowestToHighest", () => {
  const expected = ["Kate", "Sam", "Richard"];
  it("sort array Highest priority (lowest number)", () => {
    const outputAsArray = toDoList
      .sort(sortLowestToHighest("priority", mockTodos))
      .map(item => mockTodos[item].name);
    expect(outputAsArray).toEqual(expected);
  });
});
