function checkSpam(str) {
    const lowercased = str.toLowerCase();
    const status = (lowercased.includes('viagra') || lowercased.includes('xxx'));
    return status;
}

// console.log(checkSpam('buy ViAgRA now')); // true
// console.log(checkSpam('free xxxxx')); // true
// console.log(checkSpam("innocent rabbit"));

// function truncate(str, length) {
//     return str.length <= length ? 
//         str 
//         : 
//         str.slice(0, length - 1) + '...';
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te…"
// console.log(truncate("Hi everyone!", 20));

function entryCount(str) {
    const result = {};
    const arr = str.split(' ');
    for(let item of arr) {
        result[item] = result.hasOwnProperty(item) ? result[item] + 1 : 1;
    }

    console.log(result);
}