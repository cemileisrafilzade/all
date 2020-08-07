let salaries = {
    John: 100,
    Ann: 160,
    Peter: 130
}

function sumAllSalaries(obj) {
    let total = 0;
    for(let key in obj) {
        total += obj[key] || 0
    }
    return total;
}

console.log(sumAllSalaries(salaries));