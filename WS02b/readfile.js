const fs = require('fs');

function readText() { /* luetaan example.txt ja tulostetaan sen sisältö */
    fs.readFile("example.txt", "utf8", (err, data) => { //utf8 varmistaa, että teksti tulostuu oikeassa muodossa
        if (err) throw err;
        console.log(data);
        }
    )
};

readText();