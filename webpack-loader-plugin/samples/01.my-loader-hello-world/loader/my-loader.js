module.exports = function (content) {
    console.log('Hello Webpack', content);
    return `export default ${JSON.stringify(content)}`;
}