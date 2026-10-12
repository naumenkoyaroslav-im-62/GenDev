'use strict';

function ages(dict) {
    const result = {};
    for (const person in dict) {
        const info = dict[person];
        result[person] = info.died - info.born;
    }
    return result;
}

const persons = {
  khmelnitskiy: { born: 1596, died: 1657 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));