const fs = require('fs');
const path = require('path');

module.exports = function (content) {
    this.async();
    const filePath = path.resolve(__dirname, '../assets/content.txt');
    fs.readFile(filePath, 'utf-8', (err, txt) => {
        if (err) {
            console.log('Error while reading file', err);
            return;
        }

        const result = `const somebody = '${txt}'

${content}
        `;
        console.log('in readFile callback');
        this.callback(null, result);
    });

    console.log('loader function will return');


}