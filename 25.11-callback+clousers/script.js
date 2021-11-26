function print(whatToPrint){
    console.log(whatToPrint);
}

const print2 = (whatToPrint)=>{
    console.log(whatToPrint);
}

function multiply(num, num2, callback){
    let ans = num * num2;
    callback(ans)
}

multiply(5, 5, print)
multiply(5, 5, print2)
multiply(5, 5, (whatToPrint)=>{
    console.log(whatToPrint);
})
multiply(5, 5, function(whatToPrint){
    console.log(whatToPrint);
})


function $.getJson(str, cb){

}