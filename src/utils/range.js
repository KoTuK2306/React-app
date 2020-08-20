export const range = (from, to, step = 1) => {
let [i, j] = [from, to].sort();

const range = [];

while (i <= j) {
    range.push(i);
    i += Math.abs(step);
}

return range;
};