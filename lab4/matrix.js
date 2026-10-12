'use strict';

function max(matrix) {
    let result = matrix[0][0];
    for (const i of matrix) {
        for (const j of i) {
            if (j > result) result = j;
        };
    };
    return result;
}

const m = max([[1,2,3], [4,5,6], [7,8,9]]);
console.log(m);