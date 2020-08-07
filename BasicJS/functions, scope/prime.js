function isPrime(number) {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) return false;
    }
    return true;
} 

function showPrimes(number) {
    for(let i = 2; i <= number; i++) {
        if(isPrime(i)) console.log(i);
    }
}

showPrimes(prompt('Say number'));


let increase = a => a + 1

// 


function checkAge(age, granted, denied) {
    if (age < 18) denied();
    else granted();
}

let age = prompt('What is your age?', 18);

checkAge(age, () => alert('Access granted'), () => alert('Access denied'));