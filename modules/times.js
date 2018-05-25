var os = require('os');

function secondsForMinutesAndHours() {
  var uptime = os.uptime();
  var allTime = (uptime/60).toFixed(2)
  var minutes = (uptime/60).toFixed(0);
  var seconds = ((allTime - minutes)*100).toFixed(0);
  if(uptime >= 3600) {
    var allTimes = (allTime/60);
    var hours = allTimes.toFixed(0);
    var minutes = ((allTimes - hours)*100).toFixed(0);
    var minutesWithSeconds = ((allTimes - hours)*100);
    var seconds = ((minutesWithSeconds - minutes)*100).toFixed(0);
    console.log('Uptime: ~ ', hours , 'hours');
    console.log('Uptime: ~ ', minutes, 'minutes');
      if(seconds > 0) {
        console.log('Uptime: ~ ', seconds, 'seconds');
      } else {
        console.log('Uptime: ~ 0 seconds');
      };
  } else {
    console.log('Uptime: ~',minutes , 'minutes');
    console.log('Uptime: ~',seconds, 'seconds');
  };

  console.log('Uptime: ~', uptime, 'all');
}

exports.timeInMinutes = secondsForMinutesAndHours;
