let arr = [
    {name: 'John'},
    {name: 'Sara'},
    {name: 'Adam'},
    {name: 'Bill'},
    {name: 'Nikita'}
];

let name1 = "Sara";
let name2 = "Adam";

console.log(name1 > name2);

function sortByName(arr){
    return arr.sort((a,b)=>{
        if (a.name > b.name) return 1;
        if (a.name == b.name) return 0;
        if (a.name < b.name) return -1;
        
    } );
}

// // function compare(a, b) {
// //     if (a > b) return 1;
// //     if (a == b) return 0;
// //     if (a < b) return -1;
// // }

let sortedArr = sortByName(arr);
console.log(sortedArr);

// let arr = [2,2,6,1,8,3];

// let sorted = arr.sort((a, b) => {
//     if(a > b) {
//         console.log(`Please, move ${a} after ${b}`);
//         return 1;
//     }
//     if(a == b) {
//         console.log(`Please, set ${a} and ${b} on one lvl`);
//         return 0;
//     }
//     if(a < b) {
//         console.log(`Please, move ${a} before ${b}`);
//         return -1;
//     }
// });

// console.log(sorted);


