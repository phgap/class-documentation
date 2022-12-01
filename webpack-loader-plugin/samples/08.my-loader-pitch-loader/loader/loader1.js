module.exports = function (content) {
    console.log('========== [loader 1] normal. data:', this.data);
    return content;
}

module.exports.pitch = function (remainingReq, precedingReq, data) {
    console.log('========== [loader 1] pitch');
    data.value1 = 'value1';
}