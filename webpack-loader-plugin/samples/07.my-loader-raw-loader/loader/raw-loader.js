module.exports = function (content) {
    console.log('========== [raw loader]:', content);

    return content;
}

module.exports.raw = true;