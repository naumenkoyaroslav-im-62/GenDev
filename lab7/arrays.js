'use strict';

const removeElement = (array, x) => {
    const id = array.indexOf(x)
    if (id !== -1) {
        array.splice(id, 1);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array)

const removeElements = (array, ...items) => {
    for (const i of items) {
        const id = array.indexOf(i)
        if (id !== -1) {
            array.splice(id, 1);
        }
    }
}

array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);

const unique = (array) => {
    const result = [];
    for (const item of array) {
        if (!result.includes(item)) result.push(item)
    }
    return result;
}

let result = unique([2, 1, 1, 3, 2]);
console.log(result);

const difference = (array1, array2) => {
    const result = [];
    for (const item of array1) {
        if (!array2.includes(item)) {
            result.push(item);
        };
    };
    return result;
};

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
result = difference(array1, array2);
console.log(result);