const {app, BrowserWindow, ipcMain} = require('electron');

const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Позволяет выполнить код непосредственно перед созданием окна
            nodeIntegration: true, // интеграция пакетов  NodeJS (fs, path,  сетевые запросы)
            contextIsolation: false, //Изолирует контекст
            // enableRemoteModule: true
        }
    });

    mainWindow.loadFile('index.html');

    mainWindow.webContents.openDevTools(); // Позволяет при загрузке приложения сразу открыть DevTools
}

app.whenReady()
    .then(() => {
        createWindow();

        app.on('activate', function () {
            // for MacOS (need reload window. Platform specific feature)
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow();
            }
        });
    })

app.on('window-all-closed', function () {
    // for not MacOS (need reload window. Platform specific feature). Need to manually close window
    if (process.platform !== 'darwin') {
        app.quit();
    }

})

ipcMain.on('main', (event, ...args) => {
    console.log(args);
    event.sender.send('renderer', {message: 'hi, it`s main'});

});
