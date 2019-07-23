// let electronInstaller = require('electron-winstaller');
// let winDirectory = './out/Electron4Life-win32-ia32/'
// const fs = require('fs');
// const outDir = './out/win-installer/';

// if (!fs.existsSync(outDir)){
//     fs.mkdirSync(outDir);
//     console.log("New installer output directory created: ", outDir)
// }

// resultPromise = electronInstaller.createWindowsInstaller({
//     appDirectory: winDirectory, //Tells the installer where to look for the packaged app
//     outputDirectory: outDir,
//     // noMsi: true, //if true, don't create msi install (msi = microsoft installer...slightly diff from exe)
//     authors: 'James Martineau',
//     exe: 'Electron4Life.exe',
//     // setupExe: 'Electron4LifeAppInstaller.exe'
//   });

// resultPromise
// .then(() => {
//     console.log("Win packaging complete");
// })
// .catch((e) => {
//     console.log(`Win packaging error:\n ${e.message}`)
// });

const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path');
const fs = require('fs');
let winDirectory = './out/Electron4Life-win32-ia32/';
const outDir = './out/win-installer/';

if (!fs.existsSync(outDir)){
    fs.mkdirSync(outDir);
    console.log("New installer output directory created: ", outDir)
}

getInstallerConfig()
  .then(async (config) => {
    console.log("Config: ", config);
    await createWindowsInstaller(config);
  })
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer...')

  return Promise.resolve({
    appDirectory: winDirectory,
    authors: 'James Martineau',
    noMsi: true,
    outputDirectory: outDir,
    exe: 'Electron4Life.exe',
    setupExe: 'Electron4LifeAppInstaller.exe'
  })
}