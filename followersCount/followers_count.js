let count = 0; // Initialize count to 0
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Call the function to display the updated count
    checkCountValue(); // Call the function to check the count value
}

function displayCount() {
    console.log(`Current followers count: ${count}`); // Display the current count
    document.getElementById('countDisplay').innerText = `Followers Count: ${count}`; // Update the HTML element with the count
}

function checkCountValue() {
    if (count === 10) {
        console.log("Count has reached 10!"); // Log a message when count reaches 10
        alert("Congratulations! Your Instagram post has reached 10 followers!"); // Alert the user
    } else if (count === 20) {
        console.log("Count has reached 20!"); // Log a message when count reaches 20
        alert("Amazing! Your Instagram post has reached 20 followers! Keep it up!"); // Alert the user
    }
}