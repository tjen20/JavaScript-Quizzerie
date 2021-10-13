var startTimer = document.getElementById("timer");

var time = localStorage.getItem("time");
var timer = setInterval(function () {
  localStorage.setItem("time", time);
  time = localStorage.getItem("time");
  startTimer.innerHTML = time;
  time--;
  if (time < 0) {
    clearInterval(timer);
    window.location.href = 'scoreboard.html';
   }
}, 1000);

function wrongAnswer(){
    time = time-10
}
