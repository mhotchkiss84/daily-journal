// Importing the fetch functions
import fetchFunctions from './fetch.js';
// Importing the input functions
import inputFunctions from './input.js';
// Creating an event listener for the submit entry button
document.querySelector(`#submit-entry-btn`).addEventListener('click', (submitEvent) => {
	inputFunctions.clearScreen();
	inputFunctions.grabUserInput();
});
// Calling to display entries
fetchFunctions.fetchEntries();
// Adding an event listener for the delete button
document.body.addEventListener('click', (deleteEvent) => {
	if (event.target.id.includes(`del`)) {
		let targetID = event.target.id;
		targetID = targetID.split('-').pop();
		fetchFunctions.deleteEntry(targetID)
	}
});
