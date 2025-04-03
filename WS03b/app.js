// app.js
const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// middleware for static files
app.use(express.static('public'));

// Middleware to ensure default values
app.use((req, res, next) => {
    res.locals.message = res.locals.message || 'Welcome!';
    res.locals.items = res.locals.items || [];
    res.locals.tulostetaanko = res.locals.tulostetaanko || false;
    res.locals.users = res.locals.users || [];
    next();
});

// Exercise #1: EJS Template route
app.get('/', (req, res) => {
    //exercise 4 conditional message:
    const tulostetaanko = true;
    const conditionalmessage = "Tämä on salainen viesti, joka näkyy vain, jos tietty ehto täyttyy!"
    res.render('index', {
        //exercise 2 & 4
         message: 'This is a simple message!',
         conditionalmessage,
         tulostetaanko
         });
});

// Exercise 2: Passing data to EJS template
app.get('/data', (req, res) => {
    const items = ['Pinja', 'Lilli', 'Pompu'];
    res.render('index', { message: 'Tässä lista läheisimmistä ihmisistäni (ei missään erityisessä järjestyksessä):', items });
});

// Exercise 3 in index.ejs

// Exercise 4: in app.get('/') & index.ejs

//exercise 5:
app.get('/users', (req, res) => {
    const users = [
        { name: 'Aapeli', age: 28 },
        { name: 'Pinja', age: 27 },
        { name: 'Pompu', age: 0 }
    ];
    res.render('index', { users });
});



// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
