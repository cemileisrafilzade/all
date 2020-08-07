const coffeeMachineStr = `
<svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg">
    <path d="m8 19h48v39h-48z" fill="#c6c5ca"/>
    <path d="m8 19h48v2h-48z" fill="#adacb1"/>
    <rect fill="#959498" height="16" rx="2" width="58" x="3" y="3"/>
    <path d="m22 19h20a0 0 0 0 1 0 0v13a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2-2v-13a0 0 0 0 1 0 0z" fill="#57565c"/>
    <path d="m61 58v3h-58v-3h5 24 24z" fill="#3e3d42"/>
    <circle data-power cx="32" cy="11" fill="#bdfdff" r="5"/>
    <path data-display d="m10 8h12v6h-12z" fill="grey"/>
    <path d="m22 22h10v7h-10z" fill="#ff5023"/>
    <path data-tube d="m30 34h4v4h-4z" fill="#898890"/>
    <path data-handle d="m61 23v6h-5-10v-1-4-1h10z" fill="#959498"/>
    <path d="m42 24h4v4h-4z" fill="#787680"/>
    <path data-cuptop d="m40 42v4.29a9.421 9.421 0 0 0 -2.5-.29c-4.38 0-4.38 2-8.75 2a9.6 9.6 0 0 1 -4.75-1.17v-4.83z" fill="#d9ccbc"/>
    <path data-cupbottom d="m40 46.29v3.71a8.239 8.239 0 0 1 -.25 2 8 8 0 0 1 -15.75-2v-3.17a9.6 9.6 0 0 0 4.75 1.17c4.37 0 4.37-2 8.75-2a9.421 9.421 0 0 1 2.5.29z" fill="#957856"/>
    <path d="m30 34h4v1h-4z" fill="#636365"/>
</svg>
`


// 1. Create class CoffeeMachine
// 2. Put machine element to the page
// 3. Enable feature
// 4. Provide coffee make
// 5. Provice sync with all processes


class CoffeeMachine {
    constructor() {
        this.enabled = false;
        this.inProgress = false;
        this.prepareStructure();
    }
    prepareStructure() {

        this.element = document.createElement('div');
        this.element.innerHTML = coffeeMachineStr;
        this.powerBtn = this.element.querySelector('[data-power]');
        this.display = this.element.querySelector('[data-display]');
        this.tube = this.element.querySelector('[data-tube]');
        this.handle = this.element.querySelector('[data-handle]');

        this.powerBtn.addEventListener('click', this.toggle.bind(this));
        this.handle.addEventListener('click', this.makeCoffee.bind(this));


        document.body.append(this.element);

    }

    enable() {
        this.display.style.fill = "#6db16d";
        this.enabled = true;
    }

    disable() {
        this.display.style.fill = "gray";
        this.enabled = false;
        if (this.inProgress) {
            clearInterval(this.progressTimeout);
            this.inProgress = false;
            this.tube.style.transform = 'translateY(0px)';
        }
    }

    toggle() {
        console.log(this);
        this.enabled ? this.disable() : this.enable();
    }

    makeCoffee() {
        if (this.enabled && !this.inProgress) {
            this.inProgress = true;
            this.tube.style.transform = 'translateY(1px)';
            this.progressTimeout = setTimeout(() => {
                this.inProgress = false;
                this.tube.style.transform = 'translateY(0px)';
            }, 4000);
        }

    }

}

new CoffeeMachine