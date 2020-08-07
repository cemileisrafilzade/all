const arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function getMax(arr) {
        let highest = -(Infinity);
        let lowest = 0;

        for(let s = 0; s < arr.length; s++) {

            lowest = lowest + arr[s];
            if(lowest > highest)
                highest = lowest
            if(lowest < 0)
                lowest = 0

            // let current = arr[s];
            // for(let e = s + 1; e <= arr.length - 1; e++) {
            //     current += arr[e];
            //     console.log(s, e, current);
            //     highest = current > highest ? current : highest;
            // }
        }
        return highest;
}

console.log(getMax(arr));