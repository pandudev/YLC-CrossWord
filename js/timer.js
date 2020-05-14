var xmins = $("#mins")[0];
var xsec = $("#sec")[0];
var xhour = $("#hour")[0];

var interval;
var mins = "0";
var sec = "0";
var hour = "0";
var isRunning = false;

function check() {
  if (isRunning) {
    pause();
  } else {
    interval = setInterval(startTimer, 1000);
  }
  isRunning = !isRunning;
}

function start() {
  clearInterval(interval);
  check();
}

function pause() {
  clearInterval(interval);
  isRunning = false;
}

function reset() {
  mins = "0";
  sec = "0";
  hour = "0";
  xsec.innerHTML = sec;
  xmins.innerHTML = mins;
  xhour.innerHTML = hour;
}

function startTimer() {
  sec++;
  if (mins > 59) {
    hour++;
    mins = 0;
  }
  if (sec > 59) {
    mins++;
    sec = 0;
  }
  let ss = sec > 9 ? sec : "0" + sec;
  let mm = mins > 9 ? mins : "0" + mins;
  let hh = hour > 9 ? hour : "0" + hour;
  xsec.innerHTML = ss;
  xmins.innerHTML = mm;
  xhour.innerHTML = hh;

  $(".timeresult").text(hh + ":" + mm + ":" + ss);
}
