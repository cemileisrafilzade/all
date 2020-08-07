let isContinue = true;
const inputs = [];
let total =  0;

while(isContinue) {
    const input = prompt("Say number");
    const isValid = (input != '' && input != null && !isNaN(+input));
    
    if(isValid) {
        inputs.push(+input)
    } else {
        isContinue = false;
    }
}
// for (let item of inputs) {
//     total += item;
// }


alert(inputs.reduce((total, item) => total + item, 0));