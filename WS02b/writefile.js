const fs = require('fs');
const text = "tämä on teksti teksti teksti teevee\n";
const ekstratext = "Tämä on lisää tekstiä appendilla lisätty"

fs.writeFile("output.txt", text, (err) => {
    if (err) {
        console.log("error writing to file: ", err);
    } //if
    else {
        console.log("File has been succesfully written");
    }//else
    });

    fs.appendFile("output.txt", ekstratext, (err) => {
        if (err) {
            console.log("error appending to file: ", err);
        } //if
        else {
            console.log("File has been succesfully appended");
        }//else
        });