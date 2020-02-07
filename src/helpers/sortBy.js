import { sortAtoZ } from "./sortAtoZ";
import { lowestToHighest } from "./lowestToHighest";

export const sortBy = (arr, obj, field = "name") => {
  if (field === "priority") {
    return arr.sort(lowestToHighest(field, obj));
  } else {
    return arr.sort(sortAtoZ(field, obj));
  }
};
