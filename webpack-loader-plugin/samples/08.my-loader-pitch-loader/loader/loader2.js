module.exports = function (content) {
    console.log('========== [loader 2] normal');
    return content;
}

module.exports.pitch = function (remainingReq, precedingReq, data) {
    console.log('========== [loader 2] pitch');
    return '';
}