// As of 3.3.0, react-scripts does not support passing cert paths, 
// may not require this copying once we can pass the certificates

const path = require('path');
const fs = require("fs");

const modulesPath = path.resolve(__dirname, 'node_modules');
const certsPath = path.resolve(__dirname, 'certs');

replaceWebpackPemFile();

function replaceWebpackPemFile() {
    if (fs.existsSync(certsPath)) {
        const webpackFilePath = path.resolve(modulesPath, 'webpack-dev-server/ssl/server.pem');
        const pemFilePath = path.resolve(certsPath, 'server.pem');
        deleteFile(webpackFilePath);
        copyFile(pemFilePath, webpackFilePath);
    }
}

function deleteFile(file) {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
    }
}

function copyFile(srcFile, destFile) {
    if (fs.existsSync(srcFile)) {
        console.log('Copying File: ', srcFile, destFile);
        fs.copyFileSync(srcFile, destFile);
    }
}