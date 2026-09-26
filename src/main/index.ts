import { app, BrowserWindow } from "electron";
import { join } from "node:path";

function createWindow(): void {
  const window = new BrowserWindow({
    width: 1000,
    height: 700,

    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      contextIsolation: true,
    },
  });

  if (process.env.ELECTRON_RENDERER_URL) {
    window.loadURL(process.env.ELECTRON_RENDERER_URL);
  } else {
    window.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

app.whenReady().then(() => {
  createWindow();
});
