function clear (element){
    let children = element.children;
    let length = children.length;

    for(let i = length - 1;i >= 0; i--){
        children[i].remove();
    }

}

let list = document.getElementById("list");
clear(list);