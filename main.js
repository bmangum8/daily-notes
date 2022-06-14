/*column 3 number 2
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = []

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const fanNote = {
    id: 1,
    text: "You are a great writer.",
    author: "Mom",
    date: "May 1, 2000",
    topics: ["respond", "feelings", "love"]
}

const loveNote = {
    id: 2,
    text: "I love you!",
    author: "Sister",
    date: "June 20, 1987",
    topics: ["respond", "tasks", "feelings"]
}

notes.push(fanNote);
notes.push(loveNote);


// column 3 number 3
notes.push({
    id: 3,
    text: "I have read better books",
    author: "grumpy neighbor",
    date: "September 19, 2016",
    topics: ["do not respond", "feelings", "hate"]
})

notes.push({
    id: 4,
    text: "More books please",
    author: "kid in school",
    date: "February 5, 2020",
    topics: ["tasks", "love", "respond"]
})

notes.push({
    id: 5,
    text: "too long didn't read",
    author: "another kid",
    date: "April 23, 2021",
    topics: ["do not respond", "tasks", "sheesh"]
})
//console.log(notes)

//column 3 number 4
/*for (const note of notes) {
    console.log(note.text)
}*/

//column 3 number 5
/*console.log("*** All Note Topics ***")
for (const note of notes) {
    //console.log(note.topics) //works- shows list of arrays
    for (const topic of note.topics) {
     console.log(topic)
    } 
} */ 
//works! yay!


//column 3 number 6
/*
console.log("*** Average Topics Per Note ***")

// Need to count up all the topics, so start at 0
let totalTopics = 0
// Iterate all of the notes
for (const note of notes) {
    //console.log(note.topics) 
    //console.log(note.topics.length) //shows list of number of items in the topics array for each note
    totalTopics = totalTopics + note.topics.length //iterates through all notes??
}
//console.log(totalTopics) //shows 15
const averageTopicsPerNote = totalTopics /notes.length
console.log(averageTopicsPerNote) //works! shows 3
*/

//column 3 number 7

let filteredNotes = []
let criteria = "feelings"

for (const note of notes) { // checks each note
    for (topic of note.topics) //checks each topic
    if (topic.includes(criteria)) { //checks for criteria "feelings"
        filteredNotes.push(note) //pushes that note to the filteredNotes
    }
    console.log(filteredNotes)
}



//column 3 number 8
/*
console.log("***  Note Articles  ***")
for (const note of notes) {
    console.log(`<article> ${note.text} </article>`)
}
*/

//column 3 number 9
/*console.log("***  Note Articles  ***")
for (const note of notes) {
    console.log(`<article> ${note.text}`)
    for (const topic of note.topics) {
        console.log(`<section> ${topic} </section>`)
    }
    console.log("</article>")
}
*/
