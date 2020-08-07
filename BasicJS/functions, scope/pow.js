function pow(x,n) {
    return x**n
}

// alert(
//     pow(
//         +prompt('Number'),
//         +prompt('Count')
//     )
// )

const number = +prompt('Number');
const count = +prompt('Count');
const result = pow(number, count);
alert(result)
