const ul = document.getElementById('ul');

const li2 = document.createElement('li');
li2.textContent = 2;
const li3 = document.createElement('li');
li3.textContent = 3;

ul.insertBefore(li3, ul.lastElementChild);
ul.insertBefore(li2, li3);