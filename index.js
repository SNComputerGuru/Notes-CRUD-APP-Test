const button = document.getElementById("add-note-btn")

button.addEventListener("click", getNotes)

function getNotes(){
    fetch("http://localhost:3001/")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(notes => {
        displayNotes(notes)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}``


function createNote(title, content) {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    const noteTitle = document.createElement('h3');
    noteTitle.textContent = title;
    
    const noteContent = document.createElement('p');
    noteContent.textContent = content;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);
    noteDiv.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        noteDiv.remove();
    });

    return noteDiv;
}

function displayNotes(notes){
    const notesList = document.getElementById("notes-list")

    notes.forEach(note => {
        const title = note.title
        const content = note.content

        const noteDiv = createNote(title, content)

        notesList.appendChild(noteDiv)
    });
}