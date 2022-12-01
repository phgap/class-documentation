module.exports = function (content) {
    console.log('========== [loader 3] normal');
    return content;
}

module.exports.pitch = function (remainingReq, precedingReq, data) {
    console.log('========== [loader 3] pitch');
}