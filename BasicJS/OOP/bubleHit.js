class Bubble {
    constructor(x,y, size) {
        this.element = document.createElement('div');
        // this.active = true;

        // Styles start
        this.element.style.position = 'fixed';
        this.element.style.width = `${size}px`;
        this.element.style.height = `${size}px`;
        this.element.style.borderRadius = '100%';
        this.element.style.transition = 'background .4s ease-out, top 2s ease';
        this.element.style.top = `${y - size / 2}px`;
        this.element.style.left = `${x - size / 2}px`;
        this.element.style.zIndex = 10;
        this.element.style.background = getRandomColor();
        // Styles end

        this.element.addEventListener('click', (e) => this.killItself(e))
        document.body.append(this.element);

        this.animationInterval = setInterval(this.changeColor.bind(this), 400)
        
        setTimeout(() => {
            this.element.style.top = `${window.innerHeight - size}px`;
        },10)
    }
    killItself(e) {
        e.stopPropagation();
        clearInterval(this.animationInterval);
        this.element.remove();
    }

    changeColor() {
        this.element.style.background = getRandomColor();
    }
};

document.addEventListener('click', (e) => {
    new Bubble(e.clientX, e.clientY, 50);
});


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}