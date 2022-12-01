const { runLoaders } = require('loader-runner');
const path = require('path');
const fs = require('fs');

runLoaders({
    //导入的资源路径，绝对路径
    resource: path.resolve(__dirname, './src/index.js'),
    loaders: [
        path.resolve(__dirname, './loader/my-loader.js')
    ],
    // loader执行时的上下文
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs),
}, (err, result) => {
    if (err) {
        console.log('=======error in loader', err);
        return;
    }

    console.log('==========result', result);
})