const quizData = [{

        question: "Who is the best Footballer to ever exist?",
        options: ["Pele", "Anthony", "Maradona", "Ronaldo", "Messi"],
        correctAnswer: "Messi"
    },
    {
        question: "Who is the Greatest rapper to ever exist?",
        options: ["Eminem", "Jay-Z", "2 pac", "Biggie", "Akpi!"],
        correctAnswer: "Eminem"
    },
    {
        question: "What is the most versatile programming language?",
        options: ["JS", "Java", "C++", "Python", "Igbo"],
        correctAnswer: "Python"
    },
    {
        question: "How many States are there in Nigeria?",
        options: ["32", "39", "37", "38", "36"],
        correctAnswer: "36"
    },
    {
        question: "What is the best country in Africa?",
        options: ["South Africa", "West Africa", "East Africa", "North Africa", "Giant of Africa"],
        correctAnswer: "Giant of Africa"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const resultsEl = document.getElementById("results");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    progressEl.innerText = `Question ${currentQuestion + 1} of ${quizData.length}`;
    optionsEl.innerHTML = "";

    currentQuizData.options.forEach(option => {
        const optionEl = document.createElement("div");
        optionEl.classList.add("option");
        optionEl.innerText = option;
        optionEl.addEventListener("click", () => selectAnswer(option));
        optionsEl.appendChild(optionEl);
    });
    nextButton.style.display = 'none';
}

function selectAnswer(answer) {
    const optionElements = optionsEl.querySelectorAll('.option');
    optionElements.forEach(option => option.classList.remove('selected'));
    const selectedOptionElement = Array.from(optionElements).find(option => option.innerText === answer);
    if (selectedOptionElement) {
        selectedOptionElement.classList.add('selected');
    }
    selectedOption = answer;
    nextButton.style.display = 'block';
}

function checkAnswer() {
    if (selectedOption !== null && selectedOption === quizData[currentQuestion].correctAnswer) {
        score++;
    }
}

function nextQuestion() {
    checkAnswer();
    currentQuestion++;
    selectedOption = null;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    resultsEl.innerHTML = `<h2>You scored ${score} out of ${quizData.length}.</h2>`;
    resultsEl.style.display = "block";
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    progressEl.style.display = "none";
    nextButton.style.display = 'none';
    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    resultsEl.style.display = "none";
    questionEl.style.display = "block";
    optionsEl.style.display = "block";
    progressEl.style.display = "block";
    restartButton.style.display = 'none';
    loadQuiz();
}

loadQuiz();