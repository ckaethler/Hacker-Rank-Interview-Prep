// shifts each arrays elements 1 unit left
// example: 2 rotations on [1, 2, 3, 4, 5]
// becomes [3, 4, 5, 1, 2]
// return updated array 

// INPUT: array integers a, integer d, number of rotations
// 
const LeftRotation = (a, d) => {
    const newArr = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        newArr[i] = a[helperFinderIndex(i, d, a.length)];
    }

    return newArr;
}

const helperFinderIndex = (index, rotation, size) => {
    const total = index + rotation;
    return total % size;
}

const arr = [1, 2, 3, 4, 5];
const rot = 4;

console.log(LeftRotation(arr, rot));