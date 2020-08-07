// 1. Create function // ...rest operator for keycodes
// 2. Add EventListener on document for 'keydown'
// 3. Looping for keycode (event.code) from parameters & if it includes run callback 


function runOnKey(callback, ...codes) {
    const pressed = new Set;

    document.addEventListener('keydown', (event) => {
        // console.log(event.code, codes);
        pressed.add(event.code);
        console.log(pressed);
        // if(codes.includes(event.code)) {
        //     callback();
        // }

        // for(let code of codes) {
        //     if(code == event.code) {
        //         callback();
        //     }
        // }

        if(codes.length == pressed.size) {
            for(let code of codes) {
                console.log(code, pressed.has(code));
                if(!pressed.has(code)) return
            }
            callback();
        }
    })

    document.addEventListener('keyup', (event)=> {
        pressed.delete(event.code);
    })
}

runOnKey(()=>{console.log('Runned')}, "KeyZ", 'KeyW');