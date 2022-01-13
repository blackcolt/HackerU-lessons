
var busses = [
    {"kav": 10, time: 15},
    {"kav": 10, time: 10},
    {"kav": 10, time: 17}
]

let closet = false
userTime = 12
busses.forEach(busTime => {
    if (userTime < busTime.time){
        if (!closet) {
            closet = busTime
        } else if (closet.time > busTime.time) {
            closet = busTime
        }
    }
});

console.log(closet)

function getClossetBus(){
return "Hi man"
}


module.exports.getClossetBus = getClossetBus