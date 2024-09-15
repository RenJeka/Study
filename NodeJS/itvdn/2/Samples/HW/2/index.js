const events = require('events');

class FileStream extends events.EventEmitter {
    readFile(fileName){
        console.log(`file '${fileName}' has been read. \n`);
        this.emit('readFile', fileName);
    }

    writeFile(fileName, content) {
        console.log(`file '${fileName}' has been written with content: '${content}'. \n`);
        this.emit('writeFile', fileName, content);
    }
}

const fsInstance = new FileStream();

fsInstance.on('readFile', (fileName) => {
    console.log('handler - 1 for readFile');
    console.log(`Do some logic after '${fileName}' read... \n`);
});
fsInstance.on('readFile', (fileName) => {
    console.log('handler - 2 for readFile');
    console.log(`make http request after '${fileName}' read... \n`);
});
fsInstance.on('readFile', (fileName) => {
    console.log('handler - 3  for readFile');
    console.log(`logging after '${fileName}' read... \n`);
});


fsInstance.on('writeFile', (fileName, content) => {
    console.log('handler for writeFile');
    console.log(`Do some logic '${fileName}' write with content '${content}'... \n`);
});

fsInstance.writeFile('file1', 'Content for file1. Some text!');
fsInstance.readFile('file1');

