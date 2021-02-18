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
        console.log(question4.choices[3]);

var secondsLeft = 60;

startButton.addEventListener("click", function() {
    var header = document.querySelector("h1");
    header.remove();
    startButton.remove();
    timeLeft();
    askQuestions();

});

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
};

function askQuestions() {
    var questionBox = document.createElement("h2");
    questionBox.textContent= (question1.question);
    mainEl.appendChild(questionBox);

    var choiceA = document.createElement("button");
    var choiceB = document.createElement("button");
    var choiceC = document.createElement("button");
    var choiceD = document.createElement("button");

    choiceA.textContent= (question1.choices[0]);
    choiceB.textContent= (question1.choices[1]);
    choiceC.textContent= (question1.choices[2]);
    choiceD.textContent= (question1.choices[3]);

    mainEl.appendChild(choiceA);
    mainEl.appendChild(choiceB);
    mainEl.appendChild(choiceC);
    mainEl.appendChild(choiceD);
    

    // var index = 0;
    // var quesitonsObj = questions[index]
    // for(var i = 0; i < quesitonsObj.choices.length; i++) {
    //     var choicesElement = document.createElement("button")
    //     choicesElement.setAttribute("class", "choices")
    //     choicesElement.setAttribute("data-value", quesitonsObj.choices[i])
    //     choicesElement.textContent = quesitonsObj.choices[i]
    //     document.body.appendChild(choicesElement);
    // };
    // document.body.addEventListener("click", function(event) {
    //     // console.log(event)
    //     if(event.target.className === "choices") {
    //         var userChoice = event.target.textContent
    //         if(userChoice === quesitonsObj.answer) {
    //             console.log("you got it correct")
    //             console.log("iterate next question")
    //             index++
    //             console.log(index)
    //             console.log(questions[index])
    //         }
    //     }
    
}
// });
// }