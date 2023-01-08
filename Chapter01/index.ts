// 1. import electron objects from electron module
import { app, BrowserWindow } from 'electron';

// 2. declare a variable to hold the main window
let mainWindow: Electron.BrowserWindow;

// 3. create a function to create the main window
app.on("ready", () => {
    // 4. create the main window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: `${__dirname}/preload.js`,
        },
    });

    // 5. load the main window
    mainWindow.loadFile("index.html");
});
