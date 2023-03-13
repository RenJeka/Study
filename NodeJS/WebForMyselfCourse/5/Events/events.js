const EventEmitter = require('events');

const dispatcher = new EventEmitter();

dispatcher.on('connect', (data) => {
	console.log('connect 1: ', data);
});

dispatcher.on('error', (error) => {
	console.log(error);
})

dispatcher.on('connect', (data) => {
	console.log('connect 2: ', data);
});

dispatcher.emit('error', new Error('something went wrong, Jeka!'));
dispatcher.emit('connect', {myProp1: 'some long string'});