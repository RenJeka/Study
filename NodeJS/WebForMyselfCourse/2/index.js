// const Car = require('./car').Car

require('./car');
const translations = require('./ua.json');

const bmw = new Car('BMW');
bmw.logName();
console.log('Hello translation: ', translations.hello);
