const hourglass = (arr) => {
    if (!arr) throw undefined;

    const rowsCount = arr.length, colsCount = arr[0].length;
    let max = null;

    for (let row = 0; row <= rowsCount/2; row++) {
        for (let col = 0; col <= colsCount/2; col++) {
            const a = arr[row][col], b = arr[row][col+1], c = arr[row][col+2];
            const d = arr[row+1][col+1], e = arr[row+2][col];
            const f = arr[row+2][col+1], g = arr[row+2][col+2];
            const total = a + b + c + d + e + f + g;

            if (max === null) max = total;
            if (total > max) {
                max = total;
            }
        }
    }
    return max;
}

const example1 = [
    [-9, -9, -9,  1, 1, 1], 
    [ 0, -9,  0,  4, 3, 2],
    [-9, -9, -9,  1, 2, 3],
    [ 0,  0,  8,  6, 6, 0],
    [ 0,  0,  0, -2, 0, 0],
    [ 0,  0,  1,  2, 4, 0],
];

const example2 = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
];

console.log("Maximum: ", hourglass(example2));