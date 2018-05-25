process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if(input !== null) {
    var instruction = input.trim();
    switch(instruction) {
      case 'exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case 'sayhello':
        process.stdout.write('hello!\n');
        break;
      case 'getOSinfo':
      // using the imported function [var OSinfo --> 25line][.print -->25 line in modules/OSinfo.js]
        OSinfo.print();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    };
  }
});

// var OSInfo = require('./OSInfo');
// using the created module
var OSinfo = require('../modules/OSinfo');
