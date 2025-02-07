document.addEventListener("DOMContentLoaded", function () {
    // Quiz Data
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
        },
        {
            question: "Who voiced Thugnificent, from the Boondocks and what was his title?",
            options: ["Jennifer love Hewitt; actress", "Curtis L. Jackson,rapper", "Carl Jones, Executive Producer", "Dr. Dre, Producer"],
            answer: "Carl Jones, Executive Producer"
        }
      ]
    };
  
    // Variables
    let score = 0;
    let timer;
    let timeLeft = 10;
    let currentQuiz = null;
  
    // DOM Elements
    const quizContainer = document.getElementById("quiz-container");
    const scoreDisplay = document.getElementById("Score");
    const timerDisplay = document.getElementById("timer");
    const resetButton = document.getElementById("reset");
    const rickAndMortyButton = document.getElementById("RickandMorty");
    const boondocksButton = document.getElementById("TheBoondocksQuiz");
    console.log("RickandMorty");
    console.log("TheBoondocksQuiz");
  
    // Timer Function
    function startTimer() {
      clearInterval(timer);
      timeLeft = 10;
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
      console.log(startTimer);
    }
  
    // Function to Start Quiz
    function selectQuiz(category) {
      resetGame(); // Reset previous game state
      currentQuiz = category;
      quizContainer.style.display = "block";
      generateQuiz(category);
      startTimer();
  
      // Hide the quiz selection buttons so only one quiz is visible
      rickAndMortyButton.style.display = "none";
      boondocksButton.style.display = "none";
    }
  
    // Function to Generate Quiz Questions
    function generateQuiz(category) {
      quizContainer.innerHTML = ""; // Clear previous quiz
      answeredQuestions = 0;

      quizData[category].forEach((questionObj, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question-block");
  
        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `${index + 1}. ${questionObj.question}`;
        questionDiv.appendChild(questionTitle);
  
        const optionList = document.createElement("ul");
  
        questionObj.options.forEach(option => {
          const optionItem = document.createElement("li");
          const optionButton = document.createElement("button");
          optionButton.textContent = option;
          optionButton.classList.add("answer-btn");
  
          // Set data attribute for correct/wrong
          optionButton.dataset.answer = (option === questionObj.answer) ? "correct" : "wrong";
  
          // Add event listener for answer selection
          optionButton.addEventListener("click", checkAnswer);
  
          optionItem.appendChild(optionButton);
          optionList.appendChild(optionItem);
        });
  
        questionDiv.appendChild(optionList);
        quizContainer.appendChild(questionDiv);
      });
    console.log(selectQuiz);
    }
  
    // Function to Check Answer
    function checkAnswer(event) {
      const clickedButton = event.target;
      const isCorrect = clickedButton.dataset.answer === "correct";
  
      // Disable all answer buttons for this question
      const parentList = clickedButton.closest("ul");
      const buttons = parentList.querySelectorAll("button");
  
      buttons.forEach(button => {
        button.disabled = true;
        if (button.dataset.answer === "correct") {
          button.classList.add("correct");
        } else {
          button.classList.add("wrong");
        }
      });
  
      if (isCorrect) {
        score += 10;
      }
      scoreDisplay.textContent = score;
    }
    // Function to Check Win Condition
    function checkWin() {
      if (answeredQuestions === quizData[currentQuiz].length) {
          alert("You Win!");
          resetGame();
      } else {
          alert("You haven't answered all questions yet!");
      }
  }
  
    // Function to Reset the Game
    function resetGame() {
      clearInterval(timer);
      score = 0;
      timeLeft = 10;
      scoreDisplay.textContent = score;
      timerDisplay.textContent = timeLeft;
      quizContainer.style.display = "none";
      // Show quiz selection buttons again
      rickAndMortyButton.style.display = "inline-block";
      boondocksButton.style.display = "inline-block";
      console.log(resetGame);
    }
  
    // Event Listeners for Quiz Selection and Reset
    rickAndMortyButton.addEventListener("click", () => selectQuiz("RickandMorty"));
    boondocksButton.addEventListener("click", () => selectQuiz("TheBoondocksQuiz"));
    resetButton.addEventListener("click", resetGame);
    
  });
  