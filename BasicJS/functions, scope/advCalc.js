function Calc () {
    this.calculate = (input) => {

        const args = input.split(' ');
        const num1 = +args[0];
        const num2 = +args[2];
        const operator = args[1];

        const method = this.methods[operator] || null;
        if(!method) return "Im not so smart";

        return method(num1,num2)
    },
    this.addMethod = function (operand, callback) {
        this.methods[operand] = callback;
    },
    this.methods = {
        '+': (a,b) => a+b
    }
}

const calc = new Calc;
calc.addMethod('-', (a,b) => a-b);
calc.addMethod('*', (a,b) => a*b);
calc.addMethod('**', (a,b) => a**b);

console.log(calc.calculate("1 + 1"));
console.log(calc.calculate("1 - 1"));
console.log(calc.calculate("2 * 2"));
console.log(calc.calculate("2 ** 3"));

console.log(calc);