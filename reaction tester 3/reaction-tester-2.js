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

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = "#";
  for (var i = 0; i < 6; ++i) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function stop() {
    if (bestResult < counter) {
        $("#time-p").html(counter);
        bestResult = counter;
    }
    $("#last-time-p").html(counter);
    
    $(".shape").css("margin-top", "0px");
    $(".shape").css("border", "0.5px solid black");
    
    $("#startButton").css("display", "none");
    $("#stopButton").css("display", "none");
    $("#counter").css("display", "none");
    $("#neededColor").css("display", "none");
    $("#neededColor").css("color", "black");
    $("#neededColor").html("COLOR");
    $("#game-field").css("display", "none");
    $("#startButton").css("display", "none");
    $("#startButton").css("display", "none");
    $("#bottom-line").css("display", "none");
    
    $("#head").css("display", "block");
    $("#header").css("display", "table");
    $("#playButton").css("display", "block");
    $("#arrow-pic").css("display", "block");
    
//    window.location.reload();
    
    
    
}

function play() {
    color = colors[Math.floor(Math.random() * 4)];
    amountOfFalls = 1000;
    $("#last-time-p").html(counter);
    counter = 0;
    $("#counter").html(counter);
    $("#startButton").css("display", "block");
    $("#counter").css("display", "block");
    $("#neededColor").css("display", "block");
    $("#game-field").css("display", "block");
    $("#startButton").css("display", "block");
    $("#bottom-line").css("display", "block");
    
    $("#head").css("display", "none");
    $("#header").css("display", "none");
    $("#playButton").css("display", "none");
    $("#arrow-pic").css("display", "none");
    
    $(".shape").css("margin-top", "0px");
    
    numOfShapes = Math.floor($(document).width() / 150);

    for (var i = numOfShapes + 1; i <= 11; ++i) {
        $("#" + i.toString()).css("display", "none"); 
    }
    
}

function rgb_to_hex(color){
    var rgb = color.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return (rgb && rgb.length === 4) ? "#" + ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : color;
}

var breakLoop = 1;
var numOfShapes = 0;
var counter = 0;
var bestResult = -1;
var amountOfFalls = 1000;
var colors = ["RED", "GREEN", "YELLOW", "BLUE", "BLACK"];
var rgbColors = {"RED": "rgb(255, 0, 0)", 
              "GREEN": "rgb(0, 128, 0)",
              "YELLOW": "rgb(255, 255, 0)",
              "BLUE": "rgb(0, 0, 255)",
              "BLACK": "rgb(0, 0, 0)"};

var color = colors[Math.floor(Math.random() * 4)];

$("#playButton").click(function() {
    play();
});

$(".shape").click(function() {
    if ($(this).css("background-color") != rgbColors[color] && rgb_to_hex($(this).css("background-color")) != "#ffeaea") {
        for (var i = 1; i <= numOfShapes; ++i) {
            $("#" + i.toString()).stop();
        }
        stop();    
    }
    counter++;
    $(this).css("background-color", "#ffeaea");
    $(this).css("border-color", "#ffeaea");
    $("#counter").html(counter);
});

$("#stopButton").click(function() {
    for (var i = 1; i <= numOfShapes; ++i) {
        $("#" + i.toString()).stop();
    }
    breakLoop = 0;
    stop()
});

function constantFalling(element) {
    amountOfFalls--;
    $(element).css("margin-top", "0px");
    $(element).css("border", "0.5px solid black");
    if ($(element).css("background-color") == rgbColors[color]) {
        breakLoop = 0;
        for (var i = 1; i <= numOfShapes; ++i) {
                    $("#" + i.toString()).stop();
        }
        stop();
        return;
    }

    if (Math.random() > 0.5) {
        $(element).css("background-color", color);
    } else {
        $(element).css("background-color", getRandomColor());
    }
    
    if (Math.random() > 0.5) {
        $(element).css("border-radius", "50%");
    } else {
        $(element).css("border-radius", "0%");
    }
    
    $(element).animate({
        marginTop: "750px"
        }, (4000 + Math.random() * 7000 - (1000 - amountOfFalls) * 20) * breakLoop, function() {
        constantFalling(element);
    });
}
    

$("#startButton").click(async function() {
    breakLoop = 1;
    $("#neededColor").
        css("color", color).
        html(color);
    $(this).css("display", "none");
    $("#stopButton").css("display", "block");
    
    
    for(var i = 1; i <= numOfShapes; ++i) {
        if (Math.random() > 0.5) {
            $("#" + i.toString()).css("background-color", color);
        } else {
            $("#" + i.toString()).css("background-color", getRandomColor());
        }
        if (Math.random() > 0.5) {
            $("#" + i.toString()).css("background-color", color);
        } else {
            $("#" + i.toString()).css("background-color", getRandomColor());
        }
        if (Math.random() > 0.5) {
             $("#" + i.toString()).css("border-radius", "50%");
        } else {
            $("#" + i.toString()).css("border-radius", "0%");
        }
        
        if (Math.random() > 0.5) {
            await sleep(2000);
        }
            
        $("#" + i.toString()).animate({
        marginTop: "750px"
        }, (4000 + Math.random() * 7000 - (1000 - amountOfFalls) * 100) * breakLoop, function() {
            if ($(this).css("background-color") == rgbColors[color]) {
                for(var i = 1; i <= numOfShapes; ++i) {
                    $("#" + i.toString()).stop();
                }
                stop();
                breakLoop = 0;
            } else {
                constantFalling(this);
            }

        });
         
    }
    
});