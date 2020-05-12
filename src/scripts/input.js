import fetchFunctions from './fetch.js';
// Creating a function to clear the screen
const clearScreen = () => {
	document.querySelector(`#entry-container`).innerHTML = ``;
};
const inputFunctions = {
	// Creating a function to grab all the users input and put them into an object
	grabUserInput: () => {
		let journalEntry = {};
		journalEntry.date = document.querySelector(`#date`).value;
		journalEntry.concepts = document.querySelector(`#concepts-covered`).value;
		journalEntry.entry = document.querySelector(`#journal-entry`).value;
		journalEntry.mood = document.querySelector(`#mood`).value;
		fetchFunctions.postEntry(journalEntry);
	},
	// Creating a function to clear the screen
	clearScreen: () => {
		document.querySelector(`#entry-container`).innerHTML = ``;
	},
	refreshPage: () => {
		clearScreen();
		fetchFunctions.fetchEntries();
	}
};

export default inputFunctions;
