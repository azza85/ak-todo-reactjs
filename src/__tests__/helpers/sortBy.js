import { sortBy } from "./../../helpers/sortBy";
import { mockTodos } from "./../mockTodos";

const toDoList = Object.keys(mockTodos);
describe("sortBy", () => {
  const expectedAlpha = ["Kate", "Richard", "Sam"];
  it("sort array alphabetically from a to z", () => {
    const outputAsArray = sortBy(toDoList, mockTodos, "name").map(
      item => mockTodos[item].name
    );
    expect(outputAsArray).toEqual(expectedAlpha);
  });
  const expectedNumeric = ["Kate", "Sam", "Richard"];
  it("sort array Highest priority (lowest number)", () => {
    const outputAsArray = sortBy(toDoList, mockTodos, "priority").map(
      item => mockTodos[item].name
    );
    expect(outputAsArray).toEqual(expectedNumeric);
  });
});
