const quizData = {
    'RickandMorty': [
        {
            question: "What is one thing Rick is afraid of?",
            options: ["Pirates", "Gazorpians", "Cromulons", "Scary Terry"],
            answer: "Pirates"
        },
        {
            question: "What does Rick and Morty act as a reference to?",
            options: ["Anxiety", "The Five Stages of Death", "Bipolar Disorder", "Schizophrenia"],
            answer: "Bipolar Disorder"
        },
        {
            question: "What is Mr. Poopybutthole?",
            options: ["A dog walking on two legs", "An imagination conjured by Morty", "A walking hemorrhoid", "He is the parasite catalyst"],
            answer: "He is the parasite catalyst"
        },
        {
            question: "What episode of Rick and Morty is based on the movie Inception?",
            options: ["Meeseeks and Destroy", "Rixty Minutes", "Lawnmower Dog", "The Wedding Squanchers"],
            answer: "Lawnmower Dog"
        },
        {
            question: "What was the band made up of Rick, Bird Person, and Squanchy called?",
            options: ["The Beatles", "AC/DC", "Beastie Boys", "The Flesh Curtains"],
            answer: "The Flesh Curtains"
        }
    ],
    "TheBoondocksQuiz": [
        {
            question: "What was one prediction in the show that took TikTok by storm?",
            options: ["The trial of O.J. Simpson", "The Trial Of Diddy", "The trial of R. Kelly", "The trial of Depp vs. Heard"],
            answer: "The trial of R. Kelly"
        },
        {
            question: "Where does the Uncle Ruckus theme song come from?",
            options: ["Go Go Power Rangers", "Kim Possible", "Canon Busters", "Jabba The Hutt's theme song in Star Wars"],
            answer: "Jabba The Hutt's theme song in Star Wars"
        },
        {
            question: "Which two characters were based on George W. Bush and Donald Rumsfeld?",
            options: ["Ed Wuncler III & Gin Rummy", "A pimp named Slickback & Thugnificent", "Tom Dubois & Uncle Ruckus", "Colonel H. Stinkmeaner & Bushido Brown"],
            answer: "Ed Wuncler III & Gin Rummy"
        },
        {
            question: "Which actress voices both Riley and Huey?",
            options: ["Taraji P. Henson", "Regina King", "KeKe Palmer", "Viola Davis"],
            answer: "Regina King"
        }
    ]
};
//need to init game and reset it
function init() {
    resetGame();
    rickAndMortyBoard.addEventListener("click", () => startQuiz("RickandMorty"));
    boondocksButton.addEventListener("click", () => startQuiz("TheBoondocksQuiz"));
    resetButton.addEventListener("click", resetGame);
}
//Variables
let score = 0;
let timer;
let timeLeft = 30;
let currentQuiz = null;

//DOM ELements
const quizContainer = document.getElementById('quiz-container');
const scoreDisplay = document.getElementById('Score');
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('reset');
const rickAndMortyBoard = document.getElementById('rick-morty-board');
const boondocksBoard = document.getElementById('boondocks-board');
console.log(rickAndMortyBoard);
console.log(boondocksBoard);

//make sure to hide quiz boards initially



//create a function for the timer to start working as soon as the player clicks on the selected trivia quiz
//utilized W3 website for creativity and mdn web docs
function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timerDisplay.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! You lost.");
            resetGame();
        }
    }, 1000);
}

// create a function to start the quiz
function selectQuiz(category)




// function to generate quiz questions in the DOM


//Make sure to have correct answer marked and add event listeners



//create a function to check the answers and make sure to disable all buttons in the question group, also make sure the score is displayed

 // Function to check answer
 function checkAnswer(event) {
    const clickedButton = event.target;
    const isCorrect = clickedButton.dataset.answer === "correct";

   
    const parentList = clickedButton.closest("ul");
    const buttons = parentList.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
        if (button.dataset.answer === "correct") {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }
    });

    if (isCorrect) {
        score += 10;
    }

    scoreDisplay.textContent = score;
}

//create a function to reset the game
function resetGame() {
    clearInterval(timer);
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
}


//add event listners
    









