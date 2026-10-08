'use strict';

const peopleArray = [
    {name: "Marcus Aurelius", phone: "+380445554433"},
    {name: "John Pork", phone: "+88005553535"},
    {name: "Robert Paulson", phone: "+17004208356"},
    {name: "Eric Cartman", phone: "+18980452248"},
    {name: "Dwayne Johnson", phone: "+18005551234"},
    {name: "Taras Shevchenko", phone: "+380019912408"},
    {name: "Barack Obama", phone: "+12025550123"},
]

function findPhoneByName(name) {
    for (const person of peopleArray) {
        if (person.name === name) {
            return person.phone;
        }
    }
}

const peopleDict = {
    "Marcus Aurelius": "+380445554433",
    "John Pork": "+88005553535",
    "Robert Paulson": "+17004208356",
    "Eric Cartman": "+18980452248",
    "Dwayne Johnson": "+18005551234",
    "Taras Shevchenko": "+380019912408",
    "Barack Obama": "+12025550123"
}

function findPhoneByNameDict(name) {
    return peopleDict[name];
}