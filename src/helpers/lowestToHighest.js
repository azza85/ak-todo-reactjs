export const lowestToHighest = (key, obj) => (a, b) =>
  obj[a][key] - obj[b][key];
