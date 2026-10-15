'use strict';

const compose = (...fns) => {
    const connections = [];
    const fn = (x) => {
        let result = x;
        try {
            for (const f of fns.reverse()) {
                result = f(result);
            }
        } catch (error) {
            for (const callback of connections) {
                callback(error);
            }
            result = undefined;
        }
        return result;
    }
    fn.on = (eventName, callback) => {
        if (eventName === 'error') {
            connections.push(callback);
        }
    }
    return fn;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const composed = compose(inc, 7, cube);
composed.on("error", (err) => console.log(err));
console.log(composed(5))