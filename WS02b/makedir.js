const fs = require('fs');

fs.rmdir("./testikansio", (err) => {
    if (err) throw err;
    console.log("directory removed succesfully!!!")
});

/* original mkdir code below */


/* fs.mkdir("./testikansio", (err) => {
    if (err) throw err;
    console.log("directory added succesfully!!!")
}); */