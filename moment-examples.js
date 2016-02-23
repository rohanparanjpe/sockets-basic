var moment = require('moment');

var now = moment();

console.log(now.format());

console.log(now.format('X')); // get time stamp number of seconds since 1970 jan 1
console.log(now.format('x')); // get miliseconds sincd 1970 jan 1

var timestamp= 1444247486704;// getting date from milliseconds since 1970 jan 1
var timestampMoment = moment.utc(timestamp);  // 

console.log(timestampMoment.local().format('h:mma'));

/*
now.subtract(1,'year');
console.log(now.format());
console.log(now.format('MMM Do YYYY,h:mm:ssa')); //6:45pm format of time*/