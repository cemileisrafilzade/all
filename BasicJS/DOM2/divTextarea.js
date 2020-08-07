// 1. Get Div element --- querySelector
// 2. Add for div EventLister for 'click' --- addEventListener
// 3. Create Textarea DOM element --- createElement
// 4. Assign value from DIV to Textarea --- DIV.textContent / Textarea.value
// 5. Replace DIV with Textarea --- container.replaceWith
// 6. Add event Listener for Textarea for 'blur' --- addEventListener
// 7. Create DIV DOM element --- createElement
// 8. Assign value from Textarea to DIV --- DIV.textContent / Textarea.value
// 9. Replace Textarea with DIV --- container.replaceWith

let Textarea = document.createElement('textarea');;
let DIV = document.querySelector('#container');

DIV.addEventListener('click', replaceWithTextArea);
Textarea.addEventListener('blur', replaceWithDIV);

function replaceWithTextArea() {
    Textarea.value = DIV.textContent;
    DIV.replaceWith(Textarea);
    // Textarea.focus();
}
function replaceWithDIV() {
    DIV.textContent = Textarea.value;
    Textarea.replaceWith(DIV);
}