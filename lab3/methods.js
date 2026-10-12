'use strict';

const methods = (iface) => {
    let arr = [];
    for (const name in iface) {
        const method = iface[name];
        if (typeof method === "function") {
            arr.push([name, method.length])
        }
    }
    return arr;
};

console.log(methods(
    {
        m1: x => [x],
        m2: function (x, y) {
            return [x, y];
        },
        m3(x, y, z) {
            return [x, y, z];
        }
    }
));

module.exports = { methods };