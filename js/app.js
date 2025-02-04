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
}
//structure game functions and events
let score = 0;
let timer;
let timeLeft = 30;
let answeredQuestions = 0;

const questions = document.querySelectorAll(".question");
const scoreDisplay = document.getElementById('Score');
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('reset');
const rickAndMortyBoard = document.getElementById('rick-morty-board');
const boondocksBoard = document.getElementById('boondocks-board');
console.log(rickAndMortyBoard);
console.log(boondocksBoard);

//create a function for the timer to start working as soon as the player clicks on the selected trivia quiz










//a way to check each answer to the selected trivia quiz; the question is marked red for wrong and green for correct
    function checkAnswer(event) {
    console.log('This is clicked');
    if (rickAndMortyBoard('question')) {
        clearInterval(timer);
        const buttons = event.target.rickAndMortyBoard.querySelectorAll('button');
        let correctAnswer;
        buttons.foreach(button => {
            if (button.answer === "correct") {
                correctAnswer = button;
            } else if (button.answer === "wrong") {
                wrongAnswer = button;
            } ;
        })
    }   if (event.target.dataset.answer === "correct") {
        event.target.style.backgroundColor = "green";
        score++;
    } else {
        event.target.style.backgroundColor = "red";
        correctAnswer.style.backgroundColor = "green";
    }
 if (boondocksBoard('question')) {
    clearInterval(timer);
        const buttons = event.target.boondocksBoard.querySelectorAll('button');
        let correctAnswer;
        buttons.foreach(button => {
            if (button.answer === "correct") {
                correctAnswer = button
            } else if (button.answer === "wrong") {
                wrongAnswer = button;
            }
        })
    }   if (event.target.dataset.answer === "correct") {
        event.target.style.backgroundColor = "green";
        score++;
    } else {
        event.target.style.backgroundColor = "red";
        correctAnswer.style.backgroundColor = "green";
    }   render();
         setTimeout(nextQuestion,30)
}  
console.log()

function nextQuestion() {
    if (score >= 5) {
        alert(`${'You Won'}!`);
        resetGame();
    }
}


document.querySelectorAll(".question").forEach(button => {
   
    button.addEventListener("click", () => {
        console.log(rickAndMortyBoard);
        if (button.id === "Pirates" || button.id === "Death" || button.id === "Parasite" || 
            button.id === "Lawnmower" || button.id === "Curtians" || button.id === "Kelly" || 
            button.id === "Jabba" || button.id === "Rummy" || button.id === "King") {
            button.classList.add("correct");
            button.innerText += " ✅ Correct!";
            score += 10; // Increase score for correct answer
        } else {
            button.classList.add("wrong");
            button.innerText += " ❌ Wrong!";
           

        }
    });
});


// make sure each trivia buttion will activate upon being clicked on or deactivate if not chosen








// make sure game resets 
function resetGame() {
    clearInterval(timer);
    score = 0;
    answeredQuestions = 0;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = "30";

    // Remove styling and re-enable buttons
    questions.forEach(button => {
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
}