const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const client = require('discord-rich-presence')('411707329336311808');

var mainWindow;

const startTimestamp = new Date();

global.info = {
    due: 'Unknown',
    subject: 'Unknown'
};

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 340,
        height: 380,
        resizable: false
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    );

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.setMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});

function setActivity() {
    client.updatePresence({
        state: global.info.subject,
        details: global.info.due,
        startTimestamp,
        largeImageKey: 'work_large',
        smallImageKey: 'thonkang'
    });
}

setActivity();

setInterval(() => {
    setActivity();
}, 15e3);
