
// Array of colors used for the cards in the game
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

// Shuffle the colors and duplicate them to create pairs of cards
let cards = shuffle(colors.concat(colors));

// Array to keep track of the currently selected cards
let selectedCards = [];

// Variable to store the player's score
let score = 0;

// Variable to store the remaining time for the game
let timeLeft = 30;

// Variable to store the interval ID for the game timer
let gameInterval;

// Get the start button element from the DOM
const startbtn = document.getElementById('startbtn');

// Get the game container element where cards will be displayed
const gameContainer = document.getElementById('game-container');

// Get the score display element from the DOM
const scoreElement = document.getElementById('score');

// Get the timer display element from the DOM
const timerElement = document.getElementById('timer');

// Function to generate card elements and add them to the game container
function generateCards() {
    for (const color of cards) { // Loop through each color in the shuffled cards array
        const card = document.createElement('div'); // Create a new div element for the card
        card.classList.add('card'); // Add the 'card' class to the card element
        card.dataset.color = color; // Set the card's color as a data attribute
        card.textContent = '?'; // Set the initial text content of the card to '?'
        gameContainer.appendChild(card); // Append the card to the game container
    }
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { // Loop through the array in reverse
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap the elements at indices i and j
    }
    return array; // Return the shuffled array
}

// Function to handle card click events
function handleCardClick(event) {
    const card = event.target; // Get the clicked card element
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        // Ignore clicks on non-card elements or already matched cards
        return;
    }
    card.textContent = card.dataset.color; // Reveal the card's color
    card.style.backgroundColor = card.dataset.color; // Set the card's background color
    selectedCards.push(card); // Add the card to the selectedCards array
    if (selectedCards.length === 2) { // Check if two cards have been selected
        setTimeout(checkMatch, 500); // Wait 500ms before checking for a match
    }
}

// Function to check if the selected cards match
function checkMatch() {
    const [card1, card2] = selectedCards; // Destructure the selected cards
    if (card1.dataset.color === card2.dataset.color) { // Check if the colors match
        card1.classList.add('matched'); // Mark the first card as matched
        card2.classList.add('matched'); // Mark the second card as matched
        score += 2; // Increase the score by 2
        scoreElement.textContent = `Score: ${score}`; // Update the score display
    } else {
        card1.textContent = '?'; // Hide the first card's color
        card2.textContent = '?'; // Hide the second card's color
        card1.style.backgroundColor = '#ddd'; // Reset the first card's background color
        card2.style.backgroundColor = '#ddd'; // Reset the second card's background color
    }
    selectedCards = []; // Clear the selectedCards array
}

// Function to start the game
function startGame() {
    let timeLeft = 30; // Reset the timer to 30 seconds
    startbtn.disabled = true; // Disable the start button
    score = 0; // Reset the score to 0
    scoreElement.textContent = `Score: ${score}`; // Update the score display
    startGameTimer(timeLeft); // Start the game timer
    cards = shuffle(colors.concat(colors)); // Shuffle the cards
    gameContainer.innerHTML = ''; // Clear the game container
    generateCards(); // Generate new cards
    gameContainer.addEventListener('click', handleCardClick); // Add event listener for card clicks
}

// Function to start the game timer
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time left: ${timeLeft}`; // Display the initial time
    gameInterval = setInterval(() => { // Start a timer that updates every second
        timeLeft--; // Decrease the remaining time by 1
        timerElement.textContent = `Time left: ${timeLeft}`; // Update the timer display
        if (timeLeft <= 0) { // Check if the time has run out
            clearInterval(gameInterval); // Stop the timer
            let TimeLeft = 30; // Reset the timer variable
            alert('Game Over! Your score is: ' + score); // Show a game over alert with the score
            startbtn.disabled = false; // Enable the start button
        }
    }, 1000);
}

// Add an event listener to the start button to start the game when clicked
startbtn.addEventListener('click', startGame);
