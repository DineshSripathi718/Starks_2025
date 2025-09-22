// Get references to DOM elements
const form = document.querySelector('#number-guessing-form');
const errors = document.querySelector('.errors');
const scoreHolder = document.querySelector('#score');
const usernameHolder = document.querySelector("#playername");
const chancesHolder = document.querySelector('#chance-count');
const levelSelector = document.querySelector('#level');
const playernameEditBtn = document.getElementById('playernameEditBtn');

// Load game details from localStorage or set defaults
const gameDetails = JSON.parse(localStorage.getItem("gameDetails")) || {
    username : "Guest",
    score : 0,
    chances : 0,
    increaseScoreBy : 0,
    level : ""
}


// Initialize UI with loaded game details
usernameHolder.innerHTML = gameDetails.username;
scoreHolder.innerHTML = gameDetails.score;
chancesHolder.innerHTML = gameDetails.chances;

// If level is already selected, set and disable selector
if(gameDetails.level){
    levelSelector.value = gameDetails.level;
    levelSelector.disabled = true;
}

// Load hall of fame scores from localStorage or set defaults
const hallOfFame = JSON.parse(localStorage.getItem("hallOfFame")) || {
    first : {
        playername : "",
        score : 0
    },
    second : {
        playername : "",
        score : 0
    },
    third : {
        playername : "",
        score : 0
    }
};

// Display hall of fame on page load
console.log(hallOfFame);
displayHallOfFame();

// Handle player name edit/save button
playernameEditBtn.addEventListener('click', () => {
    if(playernameEditBtn.innerText == "edit"){
        // Show input field for editing player name
        usernameHolder.innerHTML = `<input type="text" id="username" placeholder="Enter playername : " value = ${gameDetails.username} / >`

        playernameEditBtn.innerText = "save";
    }else{
        // Save new player name
        const usernameChangeField = document.querySelector('#username');

        gameDetails.username = usernameChangeField.value;

        usernameHolder.innerHTML = gameDetails.username;
        playernameEditBtn.innerText = "edit";
    }
});

// Handle level selection and set game parameters
levelSelector.addEventListener('change', (e) => {
    const level = e.target.value.toLowerCase();
    gameDetails.level = level;
    switch(level){
        case "easy":
            gameDetails.chances = 9;
            gameDetails.increaseScoreBy = 1;
            gameDetails.level = "easy"
        break;
        case "medium":
            gameDetails.chances = 6;
            gameDetails.increaseScoreBy = 3;
            gameDetails.level = "medium"
        break;
        case "hard":
            gameDetails.chances = 3;
            gameDetails.increaseScoreBy = 6;
            gameDetails.level = "hard"
        break;
    }

    // Disable level selector after selection
    levelSelector.disabled = true;
    chancesHolder.innerText = gameDetails.chances;
    localStorage.setItem("gameDetails", JSON.stringify(gameDetails));
})

// Handle form submission for guessing the number
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const numberField = document.querySelector('#number');

    const number = numberField.value;
    
    numberField.value = "";
    errors.innerText = "";
    if(number){
        // Validate number range
        if(number <= 0){
            displayMessage("ERROR!","Number should be greater than zero");
            errors.innerText = "Number should be greater than zero";
        }
        else if(number > 10){
            displayMessage("ERROR!","Number should be less than 10");
            errors.innerText = "number should be less than 10";
        }  
        else
            if(gameDetails.chances > 0){
                // Start game if chances remain
                startGame(Number(number));
            }else{
                displayMessage("ERROR !","Please select the game level");
            }
    }else{
        // No input entered
        errors.innerText = "Enter a number";
        displayMessage("ERROR!","Please Enter a number...")
    }

});

// Main game logic: check guess, update score/chances, handle game over
function startGame(userInput){
    // Generate a random number between 1 and 10
    const systemGeneratedNumber = Math.ceil(Math.random() * 10);
    let audio;
    if(systemGeneratedNumber === userInput){
        // Correct guess: increase score and chances
        gameDetails.chances += 1;
        gameDetails.score += gameDetails.increaseScoreBy;

        // Animate score update
        scoreHolder.innerText = gameDetails.score;
        scoreHolder.classList.add('score-update');
        setTimeout(() => {
            scoreHolder.classList.remove('score-update');
        }, 700);
        // Play correct sound
        audio = new Audio('./assets/correct.mp3');
        audio.play();
        displayMessage("Correct!",`You guessed right! Number was ${systemGeneratedNumber}`);
    }else{
        // Incorrect guess: decrease chances
        gameDetails.chances -= 1;
        // Play wrong sound
        audio = new Audio('./assets/wrong.mp3');
        audio.play();
        displayMessage("Wrong!",`You guessed ${userInput}. Number was ${systemGeneratedNumber}`);
    }

    chancesHolder.innerText = gameDetails.chances;

    // Save game state
    localStorage.setItem("gameDetails", JSON.stringify(gameDetails));

    // If no chances left, end game
    if(gameDetails.chances == 0){
        checkTopScore();
        localStorage.removeItem("gameDetails");
        displayMessage("GAME OVER !","refreshing the page to start the game");
        window.location.reload();
    }
}

// Check if current score is a top score and update hall of fame
function checkTopScore(){
    const score = gameDetails.score;

    if(score > hallOfFame.first.score){
        // New highest score
        hallOfFame.third = hallOfFame.second;
        hallOfFame.second = hallOfFame.first;
        hallOfFame.first = {
            playername : gameDetails.username,
            score : score
        }
    }else if(score > hallOfFame.second.score){
        // New second highest score
        hallOfFame.third = hallOfFame.second;
        hallOfFame.second = {
            playername : gameDetails.username,
            score : score
        }
    }else if(score > hallOfFame.third.score){
        // New third highest score
        hallOfFame.third = {
            playername : gameDetails.username,
            score : score
        }
    }

    // Save hall of fame
    localStorage.setItem("hallOfFame", JSON.stringify(hallOfFame));
    displayHallOfFame();
}

// Display the hall of fame leaderboard in the UI
function displayHallOfFame(){
    const hallOfFameContainer = document.getElementById("hallOfFameContainer");

    const {first, second, third} = hallOfFame;

    hallOfFameContainer.innerHTML = `
        <div class="player-details">
            <h3>PlayerName</h3>
            <h3>Score</h3>
        </div>
        <div class="player-details">
            <div>${first.playername}</div>
            <div>${first.score? first.score : ""}</div>
        </div>
        <div class="player-details">
            <div>${second.playername}</div>
            <div>${second.score? second.score : ""}</div>
        </div>
        <div class="player-details">
            <div>${third.playername}</div>
            <div>${third.score? third.score : ""}</div>
        </div>
    `

    
}

// Display a pop-up message for errors or game events
function displayMessage(title,message){
    const popUp = document.getElementById("pop-up");

    popUp.style.display = "flex";
    popUpCloseButton = document.getElementById('popupCloseBtn');

    document.querySelector('.pop-up-title').innerText = title;

    document.querySelector('.pop-up-info').innerText = message;

    // Close pop-up on button click
    popUpCloseButton.addEventListener('click', () => {
        popUp.style.display = "none";
    });

    // Close pop-up on Enter key press
    document.querySelector('body').addEventListener('keypress', (e) => {
        console.log(e);
        if(e.key.toLowerCase() == "enter"){
            popUp.style.display = "none";
        }
    })

    // Auto-close pop-up after 1 second
    setTimeout(() => {
        popUp.style.display = "none"
    }, 1000);
}


