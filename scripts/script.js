// Creating a function to grab all the users input and put them into an object
function grabUserInput() {
	let journalEntry = {};
	journalEntry.date = document.querySelector(`#date`).value;
	journalEntry.concepts = document.querySelector(`#concepts-covered`).value;
	journalEntry.entry = document.querySelector(`#journal-entry`).value;
	journalEntry.mood = document.querySelector(`#mood`).value;
	postEntry(journalEntry);
}
// Creating a function to clear the screen
function clearScreen() {
	document.querySelector(`#entry-container`).innerHTML = ``;
}
// Creating an event listener for the submit entry button
document.querySelector(`#submit-entry-btn`).addEventListener('click', (submitEvent) => {
	clearScreen();
	grabUserInput();
});
// Creating a function to get the entries from the JSON database
function fetchEntries() {
    fetch('http://localhost:8088/journal-entry')
    .then((entry) => entry.json())
    .then((parsedEntry) => {
		parsedEntry.forEach(element => {
            document.querySelector(`#entry-container`).innerHTML += `
            <h3>${element.date}</h3>
            <p>Concepts covered:${element.concepts}</p>
            <p>Entry: ${element.entry}</p>
            <p>Mood: ${element.mood}</p>
            `
        });
	});
}
// Creating a function to post the entry to the JSON database
function postEntry(entry) {
	fetch(`http://localhost:8088/journal-entry`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(entry)
	});
}
// Calling to display entries
fetchEntries()
