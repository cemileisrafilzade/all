let header = document.querySelector('div');
let list = document.querySelector('ul');

header.addEventListener("click",function() {
    console.log(list.style.display);
    if(list.style.display=="none"){
        list.style.display="block";
      header.classList.add("active") ;

    }
    else{
        list.style.display="none";
        header.classList.remove("active");
    }
})
