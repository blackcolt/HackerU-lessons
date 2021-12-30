
function showName(studentObj){
    if( typeof studentObj !== 'object')
        throw TypeError("You need to give me an OBJECT!!!!!", studentObj)
    console.log(studentObj.name)
}

try {
    showName({"name": "MATAN"})
    showName("asdasdasd")  
} catch (error) {
    console.log(error)
}

console.log(1111)