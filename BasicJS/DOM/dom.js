// let div = document.body.firstElementChild;
// let ul = div.nextElementSibling;
// console.log(div);
// console.log(ul);
// let li2= ul.children[1];
// console.log(li2);

const table = document.body.firstElementChild;
console.log(table);
const trs = table.firstElementChild.children;
console.log(trs);

for(let i = 0; i < trs.length; i++) {
    const td = trs[i].children[i];
    console.log(td);
    td.style.background = 'red';
}