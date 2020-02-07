import { sortAtoZ } from "./sortAtoZ";
import { sortLowestToHighest } from "./sortLowestToHighest";

export const sortBy = (arr, obj, field = "name") => {
  if (field === "priority") {
    return arr.sort(sortLowestToHighest(field, obj));
  } else {
    return arr.sort(sortAtoZ(field, obj));
  }
};
