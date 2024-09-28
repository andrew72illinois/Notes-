// Requirements at the top
const { app, BrowserWindow } = require('electron') // Electron necessary
const path = require('node:path') // Add the path module from Node js

// Create the window - invoked with loading index.html
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600, 
      webPreferences: {
        preload: path.join(__dirname, 'preload.js') // Dirname points to path of currently executing script (project's root folder)
      }
    })
  
    win.loadFile('index.html')
  }

// Creates window for app using electron API
app.whenReady().then(() => {
    createWindow()
})  

// Quits out of process if window is terminated and not on macOS 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })


