const long = 945747;
const a = 130713;
const b = long - a;

let a_total = 0;
let b_total = 0;
let idx_a = 1;
let idx_b = 1;
a_total = a * 2 * idx_a;
b_total = b * 2 * idx_b;

while (true) {
  a_total = a * 2 * idx_a;
  b_total = b * 2 * idx_b;
  if (a_total === b_total) {
    console.log(a_total, idx_a, idx_b);
    break;
  }
  if (a_total < b_total) {
    idx_a++;
  }
  if (a_total > b_total) {
    idx_b++;
  }
}
