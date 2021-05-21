const a = document.querySelector("#ul1");
const b = document.querySelector("#ul2");

for (let i=0; i<a.length; i++) {
   a.children[i].dataset.index = i;
    b.children[i].dataset.index = i;
}
for (let j=0; j<ul2.children.length; j++){
    a.children[j].dataset.index = j;
    if(j) ul2.children[j].hidden = true;
}
ul1.onclick =function(event){
   a.querySelector(".active").classList.remove("active");
    ul2.querySelector("li:not([hidden])").hidden = true;
    event.target.classList.add("active");
   b.children[event.target.dataset.index].hidden = false;
}

const d = document.querySelector("#sec4");
const e = document.querySelector("#sec4photos");
for (let i=0; i<d.length; i++) {
    d.children[i].dataset.index = i;
     e.children[i].dataset.index = i;
 }
 for (let j=0; j<sec4photos.children.length; j++){
    d.children[j].dataset.index = j;
    if(j) sec4photos.children[j].hidden = true;
}

sec4.onclick =function(event){
    d.querySelector(".active").classList.remove("active");
     sec4photos.querySelector("td:not([hidden])").hidden = true;
     event.target.classList.add("active");
    e.children[event.target.dataset.index].hidden = false;
 }