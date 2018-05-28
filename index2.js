// var event = require('events');
// var EventEmitter = event.EventEmitter;
// line 1 & 2 means the same as line 4:
var EventEmitter = require("events").EventEmitter;
var OSinfo = require('./modules/OSinfo');

var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instruction) {
    console.log('start--> You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('the end--> Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        // starting beforeCommand event (with parameter)
        emitter.emit('beforeCommand', instruction);
        switch(instruction) {
            case '/exit':
                process.stdout.write('inside--> Quiting app!');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('inside--> hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('inside-->Wrong instruction!\n');
        };
        // starting afterCommand event (without parameter)
        emitter.emit('afterCommand');
    }
});

var OSinfo = require('./modules/OSinfo');
