const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = require('electron').ipcMain;
const Menu = require('electron').Menu;
const dialog = require('electron').dialog;
const fs = require('fs');

let mainWindow;

app.on('ready', function createWindow () 
{
	mainWindow = new BrowserWindow({width: 900, height: 600});
	mainWindow.loadURL("http://localhost:3000");
});

app.on('window-all-closed', function(){
	app.quit();
});