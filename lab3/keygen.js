'use strict';

const { random } = require("./random");

const characters = "abcdefghijklmnopqrstuvwxyz1234567890";

function generateKey(length, charset) {
    let key = "";
    for (let i = 0; i < length; i++) {
        key += charset[random(0, charset.length)];
    }
    return key;
}

console.log(generateKey(16, characters));

module.exports = {generateKey};