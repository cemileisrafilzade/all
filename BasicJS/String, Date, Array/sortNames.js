let arr = [
    {name: 'John', age: 18},
    {name: 'Adam', age: 22},
    {name: 'Mary', age: 45},
    {name: 'Stuart', age: 9},
]

// function sortByName(arr) {
//     return arr.sort((a,b) => {
//         if(a.name > b.name) return 1;
//         if(a.name == b.name) return 0;
//         if(a.name < b.name) return -1;
//         // return b.age - a.age
//     })
// }

const newData = arr.map(item => {
    item.isAdmin = false;
    return item;
});

console.log(newData);

// console.log(sortByName(arr))


let values = ["John", "Harry", "Mary", "Harry", "Beth", "Harry", "Mary", "John"];

// function unique(arr) {
//     const total = [];
//     for(let item of arr) {
//         if(!total.includes(item)) total.push(item);
//     }

//     return total;
// }

// function unique(arr) {
//     return arr.reduce((total, item) => {
//         if(!total.includes(item)) total.push(item);
//         return total
//     }, [])
// }

// function unique(arr) {
//     const uni = {};
//     const total = [];

//     for(let item of arr) {
//         uni[item] = null;
//     };
//     for(let key in uni) {
//         total.push(key);
//     };

//     return total;

// }

// console.log(unique(values));