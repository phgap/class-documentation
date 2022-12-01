const path = require('path');
const fs = require('fs');
const { runLoaders } = require('loader-runner');

runLoaders({
    resource: path.resolve(__dirname, './src/index.js'),
    loaders: [
        path.resolve(__dirname, './loader/my-sync-loader.js')
    ],
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs)
}, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
})