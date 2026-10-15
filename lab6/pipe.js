'use strict';

const pipe = (...fns) => {
    for (const f of fns) {
        if (typeof f !== "function") throw new Error("There's a non-function among us")
    }
    return (x) => {
        let result = x;
        for (const fn of fns) {
            result = fn(result);
        }
        return result;
    }
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5))