const count = +prompt('Count');
let result = '';
for(let i = 0; i < count; i++){
    for(let j = 0; j < count; j++) {
        result += '*'
    }
    result += '\n';
}
console.log(result);