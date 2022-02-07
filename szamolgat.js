let calculator = require('./szamologep.js');

let x = 30,
    y = 10;

console.log('Addition of %i and %i is  %d', x, y, calculator.osszead(x, y));

console.log('Subtraction of %i and %i is  %d', x, y, calculator.kivon(x, y));

console.log('Multiplication of %i and %i is  %d', x, y, calculator.szoroz(x, y));

console.log('Division of %i and %i is  %d', x, y, calculator.eloszt(x, y));