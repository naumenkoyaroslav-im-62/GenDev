'use strict';

function random(min = 0, max) {
    if (max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

console.log(random(1, 100));

module.exports = {random};