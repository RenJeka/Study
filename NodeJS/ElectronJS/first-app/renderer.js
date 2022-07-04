const {ipcRenderer} = require('electron');

ipcRenderer.send('main', {message: "Hi, this is from renderer message"});

ipcRenderer.on('renderer', (event, ...args) => {
    console.log(args);

});
