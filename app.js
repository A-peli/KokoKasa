function helloWorld() { //defining a simple function that "prints" to console
    console.log("hello, Node.JS!");
}

function matikkaa() { //simple function that uses math.js module functions
    const maths=require('./WS02a/maths');
    console.log("\nInside maths variable : ");
    console.log(maths);
    let a = 2345
    let b = 543
    console.log("\nSum is " +maths.add(a,b));
    console.log("Subtraction is " +maths.subtract(a,b));
}

function stringModifications() { //simple function that uses stringUtils.js module functions
    const stringUtils=require('./WS02a/stringUtils');
    console.log("\nInside stringUtils variable : ");
    console.log(stringUtils);
    let lause = "moi Jari jos katot tätä niin tässä on mun workshop -tehtävät";
    console.log("\nYour sentence in uppercase: "+stringUtils.upperCase(lause));
    console.log("Your sentence in reverse: "+stringUtils.reverse(lause));
}

function getCurrentDate() {
    const dateUtils=require('./WS02a/dateUtils');
    console.log("\nInside dateUtils.js : ");
    console.log(dateUtils);
    console.log("date today: "+dateUtils.getDate());
}


helloWorld();
matikkaa();
stringModifications();
getCurrentDate();