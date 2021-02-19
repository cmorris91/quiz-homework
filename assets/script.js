var timeEl = document.querySelector(".timer");
var highscoreButton = document.querySelector("#highscores");
var startButton = document.querySelector("#start-button");
var header = document.querySelector("h1");
var mainEl = document.querySelector("main");


var question1 = {
    question: "What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: ["Event", "Boolean", "tag", "footer"],
    answer: "Boolean"
}
        
var question2 = {
    question: "What element is used in Javascript to store data?",
    choices: ["Syntax", "Node", "HTML", "Variable"],
    answer: "Variable"

}
var question3 = {
    question: "What is Javascript?",
    choices: ["Person", "Book", "Programming Language", "Storage"],
    answer: "Programming Language"
}
var question4 = {
    question: "Which element let's you store multiple values in 1 variable?",
    choices: ["Array", "Event", "Function", "Stylesheet"],
    answer: "Array"

}
var questions = [
    question1, question2, question3, question4
]
var secondsLeft = 60;
var correct = 0; 
var incorrect = 0;

startButton.addEventListener("click", function() {
    var header = document.querySelector("h1");
    header.remove();
    startButton.remove();
    timeLeft();
    askQuestions();
    showChoices();
    
});

function timeLeft() {
    var timer = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left ";
        console.log
        if(secondsLeft === 0) {
            clearInterval(timer);
            // endQuiz();
        }
        
    }, 1000);
    return;
};

var questionIndex = 0;
var questionBox = questions[questionIndex];
console.log(questions[questionIndex].question);
function askQuestions() {
    
    // for(var i=0; i < questionBox.question.length; i++)
    var questionElement = document.createElement("h2");
    questionElement.textContent = (questions[questionIndex].question);
    mainEl.appendChild(questionElement);
    console.log(questionElement);
}
function showChoices () {
    var choicesBox = questions[questionIndex]
    for(var j=0; j< choicesBox.choices.length; j++) {
      var choicesElement = document.createElement("button");
      choicesElement.setAttribute("class", "choices");
      choicesElement.textContent = choicesBox.choices[j];
      mainEl.appendChild(choicesElement);
   
   } 
   }

mainEl.addEventListener("click", function(event) {
    console.log(event)
    if(event.target.className === "choices") {
        // questionIndex is = to the final length of the array set questionIndex to the length of the array
       
            console.log(event.target.textContent)
            var userChoice = event.target.textContent
            if(userChoice === questionBox.answer) {
                console.log("correct");
                correct++;
                questionIndex++
                mainEl.innerHTML = ""
                askQuestions();
                showChoices();
            }
            else {
                console.log("incorrect");
                incorrect++;
                secondsLeft -= 5;
                mainEl.innerHTML = ""
                questionIndex++;
                askQuestions();
                showChoices(); 
            } 
    }
    if(questionIndex > questions.length) {
        return;
     }
    
})

// function getScore() {
//     var finalScore = 0;
//     if(correct === 1) {
//         finalScore += 25;
//     }
//     if(correct === 2) {
//         finalScore += 50;
//     }
//     if(correct === 3) {
//         finalScore += 75;
//     }
//     if(correct === 4) {
//         finalScore += 100;
//     }
//     var userScore = finalScore.value;
//     console.log(userscore);

//     mainEl.appendChild(userScore);

//     localStorage.setItem("Highscores", userScore);
// }

// function endQuiz() {

//     questionBox.remove();
//     getScore();
//     // function for user to save info goes here
// }


//     var index = 0;
//     var quesitonsObj = questions[index]
//     for(var i = 0; i < quesitonsObj.choices.length; i++) {
//         var choicesElement = document.createElement("button")
//         choicesElement.setAttribute("class", "choices")
//         choicesElement.setAttribute("data-value", quesitonsObj.choices[i])
//         choicesElement.textContent = quesitonsObj.choices[i]
//         document.body.appendChild(choicesElement);
//     };
//     document.body.addEventListener("click", function(event) {
//         // console.log(event)
//         if(event.target.className === "choices") {
//             var userChoice = event.target.textContent
//             if(userChoice === quesitonsObj.answer) {
//                 console.log("you got it correct")
//                 console.log("iterate next question")
//                 index++
//                 console.log(index)
//                 console.log(questions[index])
//             }
//         }
    

// });
// 