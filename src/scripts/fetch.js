import inputFunction from './input.js';

const fetchFunctions = {
	// Creating a function to get the entries from the JSON database
	fetchEntries: () => {
		fetch('http://localhost:8088/journal-entry').then((entry) => entry.json()).then((parsedEntry) => {
			parsedEntry.forEach((element) => {
				document.querySelector(`#entry-container`).innerHTML += `
            <h3>${element.date}</h3>
            <p>Concepts covered:${element.concepts}</p>
            <p>Entry: ${element.entry}</p>
			<p>Mood: ${element.mood}</p>
			<button id="delete-${element.id}">Delete Post</button>
            `;
			});
		});
	},
	// Creating a function to post the entry to the JSON database
	postEntry: (entry) => {
		fetch(`http://localhost:8088/journal-entry`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(entry)
		}).then(() => {
			inputFunction.refreshPage();
		});
	},
	// Creating a function to delete entries
	deleteEntry: (entryID) => {
		fetch(`http://localhost:8088/journal-entry/${entryID}`, {
			method: 'DELETE'
		}).then(() => {
			inputFunction.refreshPage();
		});
	}
};

export default fetchFunctions;

// Create delete options
