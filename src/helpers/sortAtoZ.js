export const sortAtoZ = (key, obj) => (a, b) =>
  obj[a][key].localeCompare(obj[b][key]);
