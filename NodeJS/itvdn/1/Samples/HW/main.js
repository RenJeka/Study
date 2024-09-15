const firstModule = require('./firstModule');
const MyClass1 = require('./secondModule');


console.log('firstModule.abracadabra: ', firstModule.abracadabra);
console.log('firstModule.sumSquared: ', firstModule.sumSquared(2,3));
new MyClass1('Jeka', 30, 88).log()
