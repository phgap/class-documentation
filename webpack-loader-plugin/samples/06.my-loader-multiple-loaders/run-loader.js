const fs = require('fs');
const path = require('path');
const { runLoaders } = require('loader-runner');

runLoaders({
    resource: path.resolve(__dirname, './src/index.js'),
    loaders: [
        path.resolve(__dirname, './loaders/loader1.js'),
        path.resolve(__dirname, './loaders/loader2.js'),
        path.resolve(__dirname, './loaders/loader3.js'),
    ]
}, (err, result) => {
    if (err) return console.log('error while run loaders. Error:', err);

    console.log(result);
});