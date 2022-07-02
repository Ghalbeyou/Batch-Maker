const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
app.on('ready', function () {

    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        nodeIntegration: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadURL( path.join(__dirname, '/public/index.html'))
})