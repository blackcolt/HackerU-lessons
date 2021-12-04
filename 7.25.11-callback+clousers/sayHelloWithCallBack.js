function tick(num, num2, cb){
    let greaterNumber = getGreaterNumber(num, num2)
    for (let i = 0; i < greaterNumber; i++) {
        cb();
    }
    return cb
}

function getGreaterNumber(num, num2){
    // return num > num2 ? num : num2
    if (num > num2)
        return num;
    return num2;
}

tick(1,4,function(num){
    if(num){
        console.log(num);
    } else {
        console.log("hi");
    }
})()