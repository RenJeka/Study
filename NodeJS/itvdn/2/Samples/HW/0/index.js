const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('help', () => {
    console.log('General help information');
});

emitter.on('close', (message) => {
    console.log(`Application closed with message: ${message}`);
});

emitter.on('error', (error) => {
    console.log('error: ', error);
});


emitter.emit('help');
emitter.emit('close', 'good bye!');
emitter.emit('error', new Error('Very awful error!'));
