// // 1. Get fields elements, containers for results --- querySelector
// // 2. Add listeners for fields for 'change' --- addEventListener
// // 3. Create variables for all data what we need for result --- let
// // 4. Assign variable value from relative field on change --- field.value
// // 5. Create fn for calculate result --- function
// // FORMULA Math.round(initial * ((1 + interest / 100) * years));
// // 6. Call calculate on every change field event in the end --- .textContent
// // 7. On change Initial - change DOM element with this value  --- .textContent

// let initial = 10000, interest = 5, years = 1;
// const initialField =  document.querySelector('[name="money"]');
// const yearsField =  document.querySelector('[name="months"]');
// const interestField =  document.querySelector('[name="interest"]');

// const beforeViewEl = document.getElementById('money-before');
// const afterViewEl = document.getElementById('money-after');

// initialField.addEventListener('change', function(){
//     console.log(this.value);
//     initial = +this.value;
//     beforeViewEl.textContent = initial;
//     calculate();
// })
// yearsField.addEventListener('change', function(){
//     console.log(this.value);
//     years = +this.value / 12;
//     calculate();
// })
// interestField.addEventListener('change', function(){
//     console.log(this.value);
//     interest = +this.value;
//     calculate();
// })

// function calculate() {
//     const result = Math.round(initial * (1 + interest / 100 ** years));
//     afterViewEl.textContent = result;
// }




try {
    name
} catch(error) {
    console.log(error);
}