const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {test: "Shark", correct: false},
            {test: "Blue Whale", correct: true},
            {test: "Shark", correct: false},
            {test: "Shark", correct: false},
        ]
    }, 
    {
        question: "What color does yellow and green make?",
        answers: [
            {test: "Ocean mist", correct: false},
            {test: "Maroon", correct: false},
            {test: "Tangerine", correct: false},
            {test: "Lime", correct: true},
        ]
    }, 
    {
        question: "The World's largest desert is?",
        answers: [
            {test: "Thar", correct: false},
            {test: "Kalahari", correct: false},
            {test: "Sahara", correct: true},
            {test: "Sonoran", correct: false},
        ]
    }, 
    {
        question: "A computer cannot \"boot\" if it does not have the _____",
        answers: [
            {test: "Compiler", correct: false},
            {test: "Operating system", correct: true},
            {test: "Loader", correct: false},
            {test: "Assembler", correct: false},
        ]
    }, 
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {test: "Asia", correct: false},
            {test: "Austrailia", correct: true},
            {test: "Arctic", correct: false},
            {test: "Africa", correct: false},
        ]
    }, 
    {
        question: "Which one of the following rivers originates in Brahmagiri range of Western Ghats?",
        answers: [
            {test: "Pennar", correct: false},
            {test: "Cauvery", correct: true},
            {test: "Krishna", correct: false},
            {test: "Tapti", correct: false},
        ]
    }, 
    {
        question: "How many colours does sunlight consist of?",
        answers: [
            {test: "3", correct: false},
            {test: "2", correct: false},
            {test: "7", correct: true},
            {test: "5", correct: false},
        ]
    }, 
    {
        question: "Exposure to sunlight helps a person improve his health because _____",
        answers: [
            {test: "the infrared light kills bacteria in the body", correct: false},
            {test: "resistance power increases", correct: false},
            {test: "the pigment cells in the skin get stimulated and produce a healthy tan", correct: false},
            {test: "the ultraviolet rays convert skin oil into Vitamin D", correct: true},
        ]
    }, 
    {
        question: "Tsunamis are not caused by _____",
        answers: [
            {test: "Hurricanes", correct: true},
            {test: "Earthquakes", correct: false},
            {test: "Undersea landslides", correct: false},
            {test: "Volcanic eruptions", correct: false},
        ]
    },
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's _____",
        answers: [
            {test: "largest railway station", correct: true},
            {test: "highest railway station", correct: false},
            {test: "longest railway station", correct: false},
            {test: "None of the above", correct: false},
        ]
    }, 
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}