// Importing the fetch functions
import fetchFunctions from "./fetch.js"
// Importing the input functions
import inputFunctions from "./input.js"
// Creating an event listener for the submit entry button
document.querySelector(`#submit-entry-btn`).addEventListener('click', (submitEvent) => {
	inputFunctions.clearScreen();
	inputFunctions.grabUserInput();
});
// Calling to display entries
fetchFunctions.fetchEntries()