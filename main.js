const { app, BrowserWindow } = require("electron");

function createWindow() {
const win = new BrowserWindow({
width: 1200,
height: 800,
minWidth: 900,
minHeight: 600,
title: "mSearch 🚀",
backgroundColor: "#111111",
autoHideMenuBar: true,
webPreferences: {
nodeIntegration: false,
contextIsolation: true
}
});

// Page de test simple
win.loadURL("data:text/html;charset=utf-8," + encodeURIComponent(`     <html>       <body style="
        background:#111;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:sans-serif;
        height:100vh;
      ">         <h1>✅ mSearch build OK 🚀</h1>       </body>     </html>
  `));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
