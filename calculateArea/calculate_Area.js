let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    // if (typeof length !== 'number' || typeof width !== 'number') {
    //     return "Invalid input: Length and width must be numbers.";
    // }
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}