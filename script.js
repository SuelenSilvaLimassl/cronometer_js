var hour = 0;
var minutes = 0;
var seconds = 0;

var time = 1000;
var cronometer;
var state;

function start() {
  if(state == "start"){            
    return;
}
  state = "start";  
  cronometer = setInterval(() => {timer();}, time);
}

function pause() {
  state = "pause"
  clearInterval(cronometer);
}

function stop() {
  clearInterval(cronometer);
  hour = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('counter').innerText = "00:00:00";
}

function timer() {
  seconds++;
  if(seconds == 59){
    seconds = 0;
    minutes++;
    
    if(minutes == 59){
      minutes = 0;
      hour++;
    }
  }


  var format = (hour < 10 ? '0' + hour : hour) + ":" + (minutes < 10 ? '0' + minutes : minutes) + ":" + ( seconds < 10 ? '0' + seconds : seconds);
  document.getElementById('counter').innerText = format;
}
