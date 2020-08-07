// setInterval(()=>{
    // const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

//     document.body.innerHTML = `
//         <h1>
//             <span style="color: red">${hours}</span>
//             :
//             <span style="color: blue">${minutes}</span>
//             :
//             <span style="color: green">${seconds}</span>
//         </h1>
//     `

// }, 1000)

const clockHtml = `
    <h1>
        <span>00</span>
        :
        <span>00</span>
        :
        <span>00</span>
    </h1>
`;

document.body.innerHTML = clockHtml;
// const container = document.body.children[0];
const container = document.querySelector('h1');
const hoursDOM = container.children[0];
const minutesDOM = container.children[1];
const secondsDOM = container.children[2];

hoursDOM.style.color = 'red';
minutesDOM.style.color = 'blue';
secondsDOM.style.color = 'green';

function setTime(hoursEl, minutesEl, secondsEl) {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}

setInterval(() => setTime(hoursDOM, minutesDOM, secondsDOM), 1000)
