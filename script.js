// Quiz questions
const questions = [
    {
        question:'Which is the oldest of the 3 below variable options',
        options: ['CONST', 'VAR', 'LET', 'N/A'],
        answer: 'VAR',
    },
    {
        question: 'Which of the following is the correct way to type multiple words in JavaScript?',
        options: ['two-words','Two-Words', 'twoWords', 'TwoWords'],
        answer: 'twoWords',
    },
    {
        question: 'A variable name cannot start with a ______',
        options: ['number', 'capital', 'letter', '$'],
        answer: 'number',
    },
    {
        question: 'Reference value types DO NOT include which of the following',
        options: ['function', 'numbers', 'array', 'object'],
        answer: 'numbers',
    },
];

// Start Quiz

function wrongAnswer(){
    time = time-10;
}

// Timer
var startTimer = document.getElementById("timer");
var time = 90

function startQuizTimer(){
    //location.href = "file:///C:/Users/teria/OneDrive/Desktop/Challenges/Challenge-Four/JavaScript-Quizzerie/q1.html"
    setInterval(function(){ 
        startTimer.innerHTML = time
        time--; 
        console.log(time)
        localStorage.setItem("time", time);
    }, 1000);
    
}
