class Human {
    constructor(name) {
        this.name = name;
        this._health = 100;
        this._alive = true;
    }

    get health() {
        return this._health;
    }
    set health(value) {
        this._health = value;
        if(value <= 0) {
            this.alive = false;
        }
    }

    get alive() {return this._alive}
    set alive(value) {
        this._alive = value;
        if(!value) {
            console.log(`"That live was so fast" - ${this.name} said`);
        }
    }

    sayHi() {
        alert(`Hello stranger, im ${this.name}`);
    }
}

const humanSara = new Human('Sara');

// // humanSara.sayHi();
// console.log(humanSara.alive);
// humanSara.health = 0;
// console.log(humanSara.alive);

class Warrior extends Human {
    constructor(name, power) {
        super(name);
        this.power = power;
    }

    getDamage(value) {
        this.health -= value;
        if(this.alive) {
            console.log(`"Uh, that was hard, now my health is ${this.health}" - ${this.name} said`);
        }
    }

    hitSomebody(warrior) {
        if(warrior.alive) {
            console.log(`"Be scared rat, i will damage U by ${this.power}" - ${this.name} said`);
            warrior.getDamage(this.power)
        } else {
            console.log(`"I will not touch that smells bad body" - ${this.name} said`);
        }
    }
}

const warriorKonan = new Warrior('Konan', 10);
const cptAmerica = new Warrior('cptAmerica', 40);
// console.log(warriorKonan);

cptAmerica.hitSomebody(warriorKonan);
cptAmerica.hitSomebody(warriorKonan);
cptAmerica.hitSomebody(warriorKonan);
cptAmerica.hitSomebody(warriorKonan);
