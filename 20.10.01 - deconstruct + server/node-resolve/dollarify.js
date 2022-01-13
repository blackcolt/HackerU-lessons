function dollarify(nis){
    if(!isNaN(nis)) {
        throw new ErrorInvalid
    }
    return  appendDollarSign(nis * 3.1);
}

function appendDollarSign(dollar){
    return `$${dollar}`;
}
module.exports.dollarify = dollarify;
