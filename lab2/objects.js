'use strict';

function fn () {
    let obj1 = {name: "John"};
    const obj2 = {name: "John"};
    console.log({obj1, obj2});
    obj1.name = "Bob";
    obj2.name = "Bob";
    console.log({obj1, obj2});
    obj1 = {name: "Jane"};
    // obj2 = {name: "Jane"}; -> Error.
    console.log({obj1, obj2});
}

function createUser(name, city) {
    return { name, city };
}

fn();

console.log(createUser("Marcus Aurelius", "Roma"));

module.exports = { fn };