export function createGrid(c, r, template) {
  let arr = [];
  for (let i = 0; i < r; i++) {
    arr.push([]);
    for (let j = 0; j < c; j++) {
      arr[i].push(template);
    }
  }
  return arr;
}
