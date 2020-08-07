//  1. create class Circle
//  2. define constructor
//  3. define size property
//  4. Create circle DOM element
//  5. Create decrease DOM element
//  6. Create increase DOM element
//  7. Create parent DOM element
//  8. Prepare methods increase & decrease
//  9. Add listeners fo btns
// 10. Push container to HTML

class Circle {
    constructor() {
        this.size = 1;

        this.circle = document.createElement('div');
        this.circle.classList.add('circle');

        this.increaseBtn = document.createElement('button');
        this.increaseBtn.classList.add('btn');
        this.decreaseBtn = this.increaseBtn.cloneNode();
        this.increaseBtn.textContent = '+';
        this.decreaseBtn.textContent = '-';

        this.card = document.createElement('div');
        this.card.classList.add('card');

        this.card.append(
            this.decreaseBtn,
            this.increaseBtn,
            this.circle
            );

        this.decreaseBtn.addEventListener('click', this.decreaseCircle.bind(this))
        this.increaseBtn.addEventListener('click', () => this.increaseCircle())
        
        document.body.append(this.card);
    }

    increaseCircle() {
        this.size += .2;
        this.changeCircleSize();
    }
    decreaseCircle() {
        this.size -= .2;
        this.changeCircleSize();
    }

    changeCircleSize() {
        this.circle.style.transform = `scale(${this.size})`;
    }
}

const circle1 = new Circle;
const circle2 = new Circle;
