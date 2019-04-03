var start = new Date().getTime();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = "#";
  for (var i = 0; i < 6; ++i) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeShapeAppear() {
  var top = Math.random() * 80;
  var left = Math.random() * 90;
  var width = 30 + Math.random() * 100;
  if (Math.random() > 0.5) {
    document.getElementById("shape").style.borderRadius = "50%";
  }
  document.getElementById("shape").style.top = top + "%";
  document.getElementById("shape").style.left = left + "%";
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.height = width + "px";
  document.getElementById("shape").style.backgroundColor = getRandomColor();
  document.getElementById("shape").style.display = "block";
  start = new Date().getTime();
}

function appearAfterDelay() {
  setTimeout(makeShapeAppear, 500 + Math.random() * 1500);
}


var attempts = 0;
var averageTime = 0.0;
var allTime = 0.0;
var bestTime = 100000.0;

document.getElementById("shape").onclick = function() {
  document.getElementById("shape").style.display = "none";
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  allTime += timeTaken;
  attempts++;

  if (attempts < 10) {
    appearAfterDelay();
  } else {
    averageTime = allTime / attempts;
    attempts = 0;
    allTime = 0;
    document.getElementById("header").style.display = "table";
    document.getElementById("game-field").style.display = "none";
    document.getElementById("play-section").style.display = "block";
    document.getElementById("current-average-time").style.display = "none";
    document.getElementById("last-time-p").innerHTML = averageTime.toFixed(3) + "s";
    if (averageTime < bestTime) {
      document.getElementById("time-p").innerHTML = averageTime.toFixed(3) + "s";
      bestTime = averageTime;
    }
  }
}

document.getElementById("playButton").onclick = function() {
  document.getElementById("header").style.display = "none";
  document.getElementById("play-section").style.display = "none";
  document.getElementById("game-field").style.display = "block";
  document.getElementById("current-average-time").style.display = "block";
  appearAfterDelay();
}

document.getElementById("back-button").onclick = function() {
  attempts = 0;
  allTime = 0;
  document.getElementById("header").style.display = "table";
  document.getElementById("game-field").style.display = "none";
  document.getElementById("play-section").style.display = "block";
  document.getElementById("current-average-time").style.display = "none";
}
