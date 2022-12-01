const fs = require('fs');
const path = require('path');

module.exports = function (content) {
    const filePath = path.resolve(__dirname, '../src/index.txt');
    const txt = fs.readFileSync(filePath, 'utf-8');
    console.log('file content', txt);
    //读取txt文件内容
    const result = `const somebody = '${txt}';
${content}
    `;
    return result;
}