'use strict';

const list = [32, "asdf", false, 15.2, {foo: "bar"}, [1, 2, 3], null, true, "hello", "goodbye", {name: "John", age: 69}, -9999,
undefined, ["a", "b", "c"], true, NaN, Infinity,(x) => x+1, "the end"];

const counter = {};

const countTypesInArray = (arr) => {
    for (const item of arr) {
        const type = typeof item;
        if (counter[type] != undefined) {
            counter[type]++;
        } else {
            counter[type] = 1;
        }
    };
}

countTypesInArray(list);

console.dir(counter);

module.exports = { countTypesInArray };