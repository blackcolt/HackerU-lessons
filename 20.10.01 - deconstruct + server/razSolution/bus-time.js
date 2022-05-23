const fs = require("fs-extra");
const moment = require("moment");

function getClosetTime(kav, time) {
  const data = require("./bus-times.json");
  data.sort((a, b) => a.kav - b.kav);
  const busLines = data.filter((bus) => bus.kav === parseInt(kav));
  if (busLines.length === 0) {
    return "No Data exist";
  } else {
    busLines
      .sort(
        (a, b) =>
          parseInt(a.time.split(":")[1]) - parseInt(b.time.split(":")[1])
      )
      .sort(
        (a, b) =>
          parseInt(a.time.split(":")[0]) - parseInt(b.time.split(":")[0])
      );
    for (let busNumber = 0; busNumber < busLines.length; busNumber++) {
      let reqTime = {
        hour: parseInt(time.split(":")[0]),
        minute: parseInt(time.split(":")[1]),
      };
      const kavTime = {
        hour: parseInt(busLines[busNumber].time.split(":")[0]),
        minute: parseInt(busLines[busNumber].time.split(":")[1]),
      };
      if (
        reqTime.hour < kavTime.hour ||
        (reqTime.hour === kavTime.hour && reqTime.minute < kavTime.minute)
      ) {
        return busLines[busNumber];
      }
      if (busNumber === busLines.length - 1) {
        console.log("no more busess for today");
      }
    }
  }
}
module.exports = { getClosetTime };
