// const calc = {
//     a: null,
//     b: null,
//     read() {
//         this.a = +prompt('Num1');
//         this.b = +prompt('Num2');
//         console.log(this);
//     },
//     sum() {return this.a + this.b},
//     mul() {return this.a * this.b}
// }

// calc.read()
// console.log(calc.sum())
// console.log(calc.mul())


// function Calc() {
//     this.a = null;
//     this.b = null;

//     this.read = () => {
//         this.a = +prompt('a')
//         this.b = +prompt('b')
//     } 
//     this.sum = () => this.a + this.b;
//     this.mul = () => this.a * this.b;
// }

// let calculator = new Calc;
// // calculator.read();
// console.log(calculator.sum());
// // console.log(calculator.mul());


// const obj = {
//     a: 1,
//     b: 2,
//     showSum() {
//         console.log(this);
//         const sum = () => {
//             return this.a + this.b
//         }
//         console.log(sum());
//     }
// }

// obj.showSum()


const btns = document.querySelectorAll('button');
for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', btnClickHandler)
}

function btnClickHandler() {
    console.log(this);
    this.style.backgroundColor = 'red';
}