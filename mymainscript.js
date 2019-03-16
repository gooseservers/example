require("moment")

console.log('example started working');

setInterval(function () {
  console.log(('example ' + new Date().getTime()));
}, 1000);
