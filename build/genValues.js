"use strict";
const fs = require('fs');
fs.readFile('Data.txt', (err, data) => {
    let values = data.toString().split(",");
    let toCheck = [];
    console.log(values);
    for (let char1 = 97; char1 < 123; char1++) {
        for (let char2 = 97; char2 < 123; char2++) {
            for (let char3 = 97; char3 < 123; char3++) {
                let testValue = [];
                for (let i = 0; i < values.length; i++) {
                    let XORVal = values[i] ^ char1 ^ char2 ^ char3;
                    testValue.push(XORVal);
                }
                toCheck.push(testValue);
            }
        }
    }
    let dir = "toTest/";
    for (let i = 0; i < toCheck.length; i++) {
        try {
            fs.writeFileSync(dir + i + ".txt", toCheck[0].toString());
            console.log(`Values written to ${dir + i}.txt`);
        }
        catch (err) {
            console.error(err);
        }
    }
});
