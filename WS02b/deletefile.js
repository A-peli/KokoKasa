const fs = require('fs');

fs.unlink("temp.txt", (err) => {
    if (err) throw err;
    console.log("file was deleted");
});