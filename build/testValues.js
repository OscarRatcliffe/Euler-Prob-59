"use strict";
const fs2 = require('fs');
for (let i = 0; i < 17576; i++) {
    fs2.readFile(`toTeset/${i}.txt`, (err, data) => {
        let values = data.toString().split(",");
        for (let j = 0; j < values.length; j++) {
            if (j < 32 || j > 127) {
                fs2.unlink(`toTeset/${i}.txt`, (err) => {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log(`Deleted file ${i}`);
                    }
                });
            }
        }
        // TODO Check if any of the words are the top 3 english words
    });
}
