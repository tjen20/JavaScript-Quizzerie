// Quiz questions
const questions = [
    {
        question:'Which is the oldest of the 3 below variable options',
        options: ['CONST', 'VAR', 'LET'],
        answer: 'VAR',
    },
    {
        question: 'Which of the following is the correct way to type multiple words in JavaScript?',
        options: ['two-words','Two-Words', 'twoWords', 'TwoWords'],
        answer: 'twoWords',
    },
    {
        question: 'A variable name cannot start with a ______',
        options: ['number', 'capital', 'letter'],
        answer: 'number',
    },
    {
        question: 'Reference value types DO NOT include which of the following',
        options: ['function', 'numbers', 'array', 'object'],
        answer: 'numbers',
    },
    {
        question: 'the <script> element linking the JavaScript in your html should be located',
        options: ['near the top','near the middle', 'near the bottom'],
        answer: 'near the bottom',
    }
];

var startQuizEl = document.querySelector('#start-quiz');
var startQuizButton = document.getElementById('start-quiz-button');
var timerCountdown = document.getElementById('timer-countdown');
var questionZoneEl = document.querySelector('#question-zone');
var questionTitleEl = document.getElementById('question-title');
var quizAnswersEl = document.querySelector('#quiz-answers');
var questionResultEl = document.querySelector('#question-result');
var lastQuestionResultsEl = document.querySelector('#last-question-results');
var userScoreEl = document.querySelector('#user-score');
var finalScoreEl = document.getElementById('final-score');
var finalScoreContainerEl = document.querySelector('#final-score-container');
var initialsEl = document.querySelector('#initials');
var initialsbtnEl = document.querySelector('#initials-submit-button');
var highscoreDisplayEl = document.querySelector('#high-score-users');
var scoreSavedEl = document.querySelector('#score-saved');