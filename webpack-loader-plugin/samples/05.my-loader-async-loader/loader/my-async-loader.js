const fs = require('fs');
const path = require('path');

module.exports = function (content) {
    this.async();
    const filePath = path.resolve(__dirname, '../assets/content.txt');
    console.log(filePath);
    fs.readFile(filePath, 'utf-8', (err, result) => {
        if (err) return console.log('Error while reading file', err);

        const exportResult = `const somebody = '${result}'
${content}`;
        console.log('in readFile callback');
        this.callback(null, exportResult);
    });

    console.log('loader function will return');
}