// Creating an object for the journal entry
const journalEntry = {
  date: "test",
  concepts: "test",
  entry: "test",
  mood: "test",
};

// Creating an array to store the journal entries. I have some placeholder entries in there.
let entryCollection = [
  {
    date: "test",
    concepts: "test",
    entry: "test",
    mood: "test",
  },
  {
    date: "testTwo",
    concepts: "test",
    entry: "test",
    mood: "test",
  },
  {
    date: "testTwo",
    concepts: "test",
    entry: "test",
    mood: "test",
  },
];

// Pushing a test object to the array
// entryCollection.push(journalEntry)

// console.log(entryCollection);

//Creating a function that takes an object and turns it into a journal entry
// Might modigy layout of content in here later on to clean up/organize
function buildJournalEntry(entry) {
  document.querySelector(
    `#entry-container`
  ).innerHTML += `<section class="seperate-entries"><h3>Date: ${entry.date}</h3><p>Concepts covered: ${entry.concepts}</p><p>Entry: ${entry.entry}</p><p>Mood: ${entry.mood}</p>`;
}

// In your Daily Journal form, add an event listener to the submit/ save button. The callback function for your event listener should do the following things:
// Capture the values the user entered into your form fields.
// Once you have the values of the text inputs in your JavaScript, build them into an object that looks like this

// Creating an event listener for the submit entry button
// Tried to do clg "test" instead of function after click and test would run before the button was pressed
document
  .querySelector(`#submit-entry-btn`)
  .addEventListener("click", (eventAction) => {
    console.log("test");
  });
