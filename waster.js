"use strict";

const minutesToWaste = parseInt(process.argv[2]);

const minutesToMs = (minutes) => minutes * 60 * 1000;

setTimeout(() => {
  console.log('All done wasting time. What a ride!');
  process.exit(0);
}, minutesToMs(minutesToWaste));

let minutesWasted = 0;
setInterval(() => {
  minutesWasted += 1;
  console.log(`It's been a minute y'all! (${minutesWasted} to be precise).`);
}, minutesToMs(1));

console.log(`Time is money y'all! Let's get to wasting these ${minutesToWaste} minutes of life we will never get back.`);