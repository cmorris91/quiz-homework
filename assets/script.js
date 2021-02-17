var timeEl = document.querySelector(".timer");
var highscoreButton = document.querySelector("#highscores");
var startButton = document.querySelector("start-button");

var secondsLeft = 60;


startButton.addEventListener("click", function() {
    timeLeft();
    // call function that will ask question goes her
})



function timeLeft() {
    var timer = setInterval(function() {
        secondsLeft--;
     timeEl.textContent = secondsLeft + " seconds left ";
     console.log
     if(secondsLeft === 0) {
         clearInterval(timer);
// going to call function here that will end quiz and show 
// score 
     }

    }, 1000);
    return;
}

