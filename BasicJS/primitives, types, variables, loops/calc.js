const a = +prompt('First number');
const b = +prompt('Second number');
const operator = prompt('Operator');
console.log(a,b,operator);

switch(operator) {
case "+" :
    alert(a+b)
    break;

    case "-" :
    alert(a-b)
    break;

    case "*" :
    alert(a*b)
    break;

}
