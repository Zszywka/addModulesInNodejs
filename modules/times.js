var os = require('os');
var colors = require('colors');
process.stdin.setEncoding('utf8');

// -------------- I way - Method returns hours and minutes and seconds ---------
// function secondsForMinutesAndHours() {
//   var uptime = os.uptime();
//   var allTime = (uptime/60).toFixed(2)
//   var minutes = (uptime/60).toFixed(0);
//   var seconds = ((allTime - minutes)*100).toFixed(0);
//   if(uptime >= 3600) {
//     var allTimes = (allTime/60);
//     var hours = allTimes.toFixed(0);
//     var minutes = ((allTimes - hours)*100).toFixed(0);
//     var minutesWithSeconds = ((allTimes - hours)*100);
//     var seconds = ((minutesWithSeconds - minutes)*100).toFixed(0);
//     var consoleHours = hours;
//     if(minutes > 0) {
//       var consoleMinutes = minutes;
//       if(seconds > 0) {
//         console.log('Uptime: ~'.green, consoleHours,'hours,', consoleMinutes,'minutes and', seconds, 'seconds.');
//       } else {
//         console.log('Uptime: ~'.green, consoleHours,'hours,', consoleMinutes,'minutes',' and 0 seconds.');
//       };
//     } else {
//       var consoleMinutes = 0;
//       if(seconds > 0) {
//         console.log('Uptime: ~'.green, consoleHours,'hours,', consoleMinutes,'minutes', seconds, 'seconds');
//       } else {
//         console.log('Uptime: ~'.green, consoleHours,'hours.');
//       }
//     };
//   } else {
//       if(seconds > 0) {
//         console.log('Uptime: ~'.green,minutes , 'minutes and ', seconds, 'seconds');
//       } else {
//         console.log('Uptime: ~'.green,minutes , 'minutes and 0 seconds');
//       };
//   };
//
//   console.log('Uptime: ~'.green, uptime, 'all time in seconds');
// };

// -----------II way - Method returns hours and minutes and seconds-------------
function secondsForMinutesAndHours() {
  var uptime = os.uptime();
  var timeReunded = Math.round(uptime);
  var hours = Math.floor(timeReunded/3600);
  var minutes = Math.floor(timeReunded/60 - hours*60);
  var seconds = timeReunded - (minutes*60) - (hours*3600);
  console.log(('Uptime: ').green + hours + ' h '  + minutes + ' minutes and ' +  seconds +' seconds.');
}
exports.timeInMinutes = secondsForMinutesAndHours;
