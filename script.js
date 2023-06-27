//your JS code here. If required.
// Get the required HTML elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const outputDiv = document.getElementById("output");
const btn = document.getElementById("btn");

// Function to display the message on the webpage after a delay
async function displayMessage() {
  const message = textInput.value;
  const delay = parseInt(delayInput.value);

  if (!message || isNaN(delay)) {
    outputDiv.innerText = "Please enter a valid message and delay.";
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, delay));
  outputDiv.innerText = message;
}

// Event listener for the button click
btn.addEventListener("click", displayMessage);

