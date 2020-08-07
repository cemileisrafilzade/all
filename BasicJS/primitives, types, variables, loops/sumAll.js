let value = +prompt('Say number');
let sum = 0;

while (value != 0) {
    let divider = value % 10;
    sum += divider;
    value -= divider;
    value = value / 10;
}

alert(sum)