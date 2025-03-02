const fs = require('fs');

// valvo watch.txt tiedostoa muutosten varalta
fs.watch('watch.txt', (eventType, filename) => {
    if (eventType === 'change') {
      console.log(filename +"was modified.");
    }
  });