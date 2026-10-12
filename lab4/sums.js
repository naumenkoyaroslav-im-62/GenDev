'use strict';

function sumForIn(...args) {
    let result = 0;
    for (const i in args) {
        result += args[i];
    }
    return result;
};

function sumForOf(...args) {
    let result = 0;
    for (const i of args) {
        result += i;
    }
    return result;
}

function sumWhile(...args) {
    let result = 0;
    while (args.length > 0) {
        result += args.pop();
    }

    return result;
}

function sumDoWhile(...args) {
    if (args.length === 0) return 0;
    let result = 0;
    do {
        result += args.pop();
    } while (args.length > 0);

    return result;
}

function sumReduce(...args) {
    return args.reduce((acc, value) => {
        return acc + value;
    }, 0);
}


console.log(sumForIn(1, 2, 3));
console.log(sumForOf(0));
console.log(sumWhile());
console.log(sumDoWhile(1, -1, 1));
console.log(sumReduce(10, -1, -1, -1));