// Creating an object for the journal entry
let journalEntry = {
  date: "",
  concepts: "",
  entry: "",
  mood: "",
};

// Creating an array to store the journal entries. I have some placeholder entries in there.
let entryCollection = [];

// Creating a function to grab all the users input and put them into an object
function grabUserInput(){
    journalEntry.date = document.querySelector(`#date`).value
    journalEntry.concepts = document.querySelector(`#concepts-covered`).value
    journalEntry.entry = document.querySelector(`#journal-entry`).value
    journalEntry.mood = document.querySelector(`#mood`).value
    entryCollection.push(journalEntry)
    // console.log(entryCollection);
}

//Creating a function that takes an object and turns it into a journal entry
// Might modigy layout of content in here later on to clean up/organize
// Need to make seperate functions. Having the loop inside the build function does not work and makes duplicate posts
function buildJournalEntry() {
    for(let i = 0; i != entryCollection.length; i++){
        document.querySelector(`#entry-container`).innerHTML += `<section class="single-entry">
        <h3>Date: ${entryCollection[i].date}</h3>
        <p>Concepts: ${entryCollection[i].concepts}</p>
        </section>`
    }
}

// Creating an event listener for the submit entry button
// Tried to do clg "test" instead of function after click and test would run before the button was pressed
document.querySelector(`#submit-entry-btn`).addEventListener("click", submitEvent => {
    grabUserInput()
    buildJournalEntry()
});