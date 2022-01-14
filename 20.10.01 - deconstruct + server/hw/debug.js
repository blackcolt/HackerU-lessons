var moment = require('moment');
const x = moment('10:30');
const y = moment('10:40')
x.isSameOrAfter(y)
console.log(x);
