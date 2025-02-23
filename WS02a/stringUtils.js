function upperCase(lause){
    let uppercaseLause = lause.toUpperCase();
    return uppercaseLause;
}

function reverse(lause){
    let reversedLause = lause.split('').reverse().join('');
    return reversedLause;
}
module.exports = {upperCase, reverse};