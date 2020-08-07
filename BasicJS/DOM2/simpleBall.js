let field = document.querySelector(".field");
let ball = document.querySelector(".ball");
let fieldH = parseInt(getComputedStyle(field).height);
let fieldW = parseInt(getComputedStyle(field).width);
let ballH = parseInt(getComputedStyle(ball).height);
let ballW = parseInt(getComputedStyle(ball).width);

console.log(fieldH, fieldW, ballH, ballW);

field.addEventListener("click" , function(e){
    console.log(e)
    let y = e.offsetY-ballW/2;
    let x = e.offsetX-ballH/2;


    if(x<0) {
        x = 0;
    };
    if(x > fieldW-ballW) {
        x= fieldW - ballW;
    };

    if(y<0) {
        y=0;
    };
    if(y>fieldH-ballH) {
        y= fieldH - ballH;
    };

    ball.style.top = `${y}px`;
    ball.style.left = `${x}px`;

    


});