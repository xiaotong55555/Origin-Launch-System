"use strict";

// electron/preload.ts
var import_electron = require("electron");
var api = {
  async call(command, input) {
    const result = await import_electron.ipcRenderer.invoke("qinglan:command", command, input);
    if (!result.ok) throw new Error(result.error);
    return result.value;
  },
  subscribe(callback) {
    const handler = (_event, state) => callback(state);
    import_electron.ipcRenderer.on("qinglan:state", handler);
    return () => import_electron.ipcRenderer.removeListener("qinglan:state", handler);
  }
};
import_electron.contextBridge.exposeInMainWorld("qinglan", api);
