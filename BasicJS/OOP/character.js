const wrapper = document.getElementById('wrapper');

function createGrid(width,height) {
    
    let gridHTML = `<div class="grid" style="
                    width: 100%;
                    display:flex; 
                    flex-wrap: wrap;">`;
    for(let x = 0; x < width * height; x++) {
        gridHTML += `
            <div style="
                border: 1px solid black;
                width: ${100 / width}%;
                padding-bottom: ${100 / width}%;
            "></div>
        `
    }
    gridHTML += '</main>';

    wrapper.innerHTML = gridHTML;
};
createGrid(5,5);

class Character {
    constructor(startX, startY) {

        this.posX = startX;
        this.posY = startY;

        this.character = document.createElement('div');
        this.character.classList.add('char-img');

        this.btnUp =  document.createElement('button');
        this.btnUp.classList.add('arrow');

        this.btnDown = this.btnUp.cloneNode();
        this.btnLeft = this.btnUp.cloneNode();
        this.btnRight = this.btnUp.cloneNode();

        this.btnUp.textContent = '↑';
        this.btnDown.textContent = '↓';
        this.btnLeft.textContent = '←';
        this.btnRight.textContent = '→';

        this.character.append(
            this.btnUp,
            this.btnLeft,
            this.btnRight,
            this.btnDown
        );

        this.updatePos();

        this.btnUp.addEventListener('click', this.moveUp.bind(this));
        this.btnDown.addEventListener('click', this.moveDown.bind(this));
        this.btnLeft.addEventListener('click', this.moveLeft.bind(this));
        this.btnRight.addEventListener('click', this.moveRight.bind(this));

        wrapper.append(this.character);
    }

    moveDown() {
        this.posY += 20;
        this.updatePos();
    }
    moveUp() {
        this.posY -= 20;
        this.updatePos();
    }
    moveLeft() {
        this.posX -= 20;
        this.updatePos();
    }
    moveRight() {
        this.posX += 20;
        this.updatePos();
    }

    updatePos() {
        this.character.style.top = `${this.posY}%`;
        this.character.style.left = `${this.posX}%`;
    }
}

const char = new Character(20,20)

