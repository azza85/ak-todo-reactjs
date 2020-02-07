export const sortLowestToHighest = (key, obj) => (a, b) =>
  obj[a][key] - obj[b][key];
