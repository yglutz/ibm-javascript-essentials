let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Change button text andfunctionality
    var button = document.getElementById('btn');
    button.innerText = 'End Test';
    button.onclick = endTest;
    console.log(startTime)
}


function endTest() {
    endTime = new Date().getTime();

    // Disable the input field
    document.getElementById("userInput").readOnly = true;

    // Caluclate time elapsed and words per minute
    var timeElapsed = (endTime - startTime) / 1000; // seconds
    console.log(timeElapsed);
    var userTypedText = document.getElementById('userInput').value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60); // words per minute
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML =
        "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>WPM: " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById('btn');
    button.innerHtml = "Start Test";
    button.onclick = startTest;
}