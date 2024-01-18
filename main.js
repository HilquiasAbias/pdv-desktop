const {app, BrowserWindow} = require('electron');  
const url = require('url');
const path = require('path');   
	
function onReady () {     
	win = new BrowserWindow({
    width: 1360, 
    height: 768,
    resizable: false,
		fullscreen: true,
  })

	win.setMenu(null);
	win.webContents.openDevTools();
	
	win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/sakai-ng/index.html'),       
		protocol: 'file:',      
		slashes: true     
	}))   
} 

app.on('ready', onReady);