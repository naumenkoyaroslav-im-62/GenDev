'use strict';

const array = () => {
    const items = [];
    const get = (x) => items[x];
    get.push = (x) => items.push(x);
    get.pop = () => items.pop();
    return get;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());