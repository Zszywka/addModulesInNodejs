// 'os' module import
var os = require('os');
var colors = require('colors');

function getOSinfo() {
  var type = os.type();
  if(type === 'Darwin') {
    type = 'OSX';
  } else if(type === 'Windows_NT') {
    type = 'Windows';
  }

  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();
  console.log('System:'.gray, type);
  console.log('Release:'.red, release);
  console.log('CPU model:'.blue, cpu);
  // console.log('Uptime: ~', (uptime/60).toFixed(2), 'min');
  console.log(Minutes.timeInMinutes());
  console.log('User name: '.yellow, userInfo.username);
  console.log('Home dir: '.grey, userInfo.homedir);
}

// export us function [like a module]
exports.print = getOSinfo;

// // export more than one function:
// exprorts.print = getOsInfo;
// exports.getCPUDetails = getCPUDetails;
// // or: (the same)
// module.exports = {
//   exprorts.print: getOsInfo,
//   exports.getCPUDetails: getCPUDetails
// };
var Minutes = require('./times.js');
