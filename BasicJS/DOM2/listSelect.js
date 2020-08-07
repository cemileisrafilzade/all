// 1. Select list items
// 2. Add event listeners for 'click'
// 3. Add clicked item class .selected
// 4. Check meta key pressed & deselect or toggle

let listItems = document.querySelectorAll('li');
    for(let item of listItems){
        item.addEventListener('click', function(event){
            console.log(event);
            if(event.metaKey){
                this.classList.toggle('selected')
            } else{
                let selected = document.querySelectorAll(".selected")
                for(let item of selected){
                    if(item !== this){
                        item.classList.remove("selected")
                    }    
                }

                this.classList.add('selected')
            }
        })


    }

