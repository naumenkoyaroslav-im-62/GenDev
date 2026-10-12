'use strict';

function ipToInt(ip = "127.0.0.1") {
    const arr = ip.split(".").map(Number);
    return arr.reduce((acc, value) => {
        return (acc << 8) + value;
    }, 0);
};

console.log(ipToInt('10.0.0.1'));