'use strict';

const inc = (num) => {
    if (typeof num === 'object' && num["n"])
    {
        num.n += 1;
    }
};

const obj = {n: 5};
inc(obj);

console.dir(obj);

module.exports = { inc };