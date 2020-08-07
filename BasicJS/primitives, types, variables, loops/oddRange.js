const min = +prompt('Min');
const max = +prompt('Max');
let result = '';

for(let i = min; i <= max; i++) {
    // !(i % 2) ? result += `${i},` : null;
    if(!(i % 2)) {
        result += i + ',';
    }
}

console.log(result);