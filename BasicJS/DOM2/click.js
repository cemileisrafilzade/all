const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
    console.log(event.target);
    event.target.remove();
})

function harakiri() {
    this.remove()
}