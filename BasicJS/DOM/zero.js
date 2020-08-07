// function isZeroSum(arr) {
//     const set = new Set();
//     set.add(0);

//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         console.log(sum);

//         if(set.has(sum)) {
//             return true
//         }
// // 
//         set.add(sum);
//     }

//     return false;
// }

// console.log(isZeroSum([-5, 12, 4, -7, 2, 1, 8]));
// console.log(isZeroSum([3, -2, -6, 2, 1, -2]));