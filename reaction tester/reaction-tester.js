function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
document.getElementById('stopButton').style.display="none";
var colors = ["red", "green", "blue", "black", "white"];
var gameStarted = false;
var appearanceTime = new Date();
var clickTime = new Date();
var bestTime = 10000000;
var attempts = 5;
var currentAttempt = 0;

document.getElementById('playButton').onclick = async function() {
  document.getElementById('stopButton').style.display="block";
  for (var i = 1; i <= 5; ++i) {
    document.getElementById('attempt' + i.toString()).innerHTML = "";
  }
  currentAttempt = 0;
  gameStarted = true;
  while (currentAttempt < attempts && gameStarted) {
    timer = 3000 + Math.random() * 2000;
    await sleep(timer);
    if (gameStarted){
      document.getElementById('square-div').style.backgroundColor = colors[currentAttempt];
    }
    currentAttempt++;
    appearanceTime = new Date();

  }
}

document.getElementById('square-div').onclick = function() {
  if (gameStarted) {
    clickTime = new Date();
    var miliseconds = clickTime.getTime() - appearanceTime.getTime();
    if (miliseconds < bestTime) {
      bestTime = miliseconds;
    }
    document.getElementById('time-p').innerHTML = bestTime + " miliseconds";
    document.getElementById('attempt' + (currentAttempt).toString()).innerHTML = miliseconds + " miliseconds";

    if (currentAttempt == 5) {
      document.getElementById('stopButton').style.display="none";
      document.getElementById('square-div').style.backgroundColor="yellow";
      gameStarted = false;
    }
  }
}

document.getElementById('stopButton').onclick = function() {
   window.location.reload();
}
