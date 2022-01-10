function nisify(dollar){
    if(!isNaN(dollar)) {
        throw new ErrorInvalid
    }
    const nis = dollar / 3.1
    return appendDollarSign(nis);
}

function appendDollarSign(nis){
    return `$${nis}`;
}
module.exports.nisify = nisify;
