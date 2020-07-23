const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow, Menu} = electron;

let main, addDocWin;

const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add document',
                click() {
                    addDocumentWindow();
                }
            },
            {
                label: 'Clear documents'
            },
            {
                label: 'User details'
            },
            {
                label: 'Exit app'
            }
        ]
    }
];

app.on('ready', () => 
{
    main = addWindow('main.html');
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
});

function addDocumentWindow() {
    addDocWin = addWindow('doc.html');
}

function addWindow(name) {
    let win = new BrowserWindow({});
    win.loadURL(url.format({
        pathname: path.join(__dirname, name),
        protocol: 'file',
        slashes: true
    }));

    return win;
}