const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "What color does yellow and green make?",
        answers: [
            { text: "Ocean mist", correct: false },
            { text: "Maroon", correct: false },
            { text: "Tangerine", correct: false },
            { text: "Lime", correct: true },
        ]
    },
    {
        question: "The World's largest desert is?",
        answers: [
            { text: "Thar", correct: false },
            { text: "Kalahari", correct: false },
            { text: "Sahara", correct: true },
            { text: "Sonoran", correct: false },
        ]
    },
    {
        question: "A computer cannot \"boot\" if it does not have the",
        answers: [
            { text: "Compiler", correct: false },
            { text: "Operating system", correct: true },
            { text: "Loader", correct: false },
            { text: "Assembler", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Austrailia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Which one of the following rivers originates in Brahmagiri range of Western Ghats?",
        answers: [
            { text: "Pennar", correct: false },
            { text: "Cauvery", correct: true },
            { text: "Krishna", correct: false },
            { text: "Tapti", correct: false },
        ]
    },
    {
        question: "How many colours does sunlight consist of?",
        answers: [
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "7", correct: true },
            { text: "5", correct: false },
        ]
    },
    {
        question: "Exposure to sunlight helps a person improve his health because",
        answers: [
            { text: "the infrared light kills bacteria in the body", correct: false },
            { text: "resistance power increases", correct: false },
            { text: "the pigment cells in the skin get stimulated and produce a healthy tan", correct: false },
            { text: "the ultraviolet rays convert skin oil into Vitamin D", correct: true },
        ]
    },
    {
        question: "Tsunamis are not caused by",
        answers: [
            { text: "Hurricanes", correct: true },
            { text: "Earthquakes", correct: false },
            { text: "Undersea landslides", correct: false },
            { text: "Volcanic eruptions", correct: false },
        ]
    },
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        answers: [
            { text: "largest railway station", correct: true },
            { text: "highest railway station", correct: false },
            { text: "longest railway station", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();