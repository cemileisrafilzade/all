// 1. Get columns
// 2. Create Add Btn
// 3. Show addBtn on hover / hide on leave
// 4. Push card template on addBTn click
// 4.1 Create card example
// 4.2 Validate card
// 4.3 Change card to static

// 5. Provide delete
// 6. Provide edit
// 7. Provide data save with LocalStorage


const columns = document.querySelectorAll(".column");

const addButton = document.createElement('button');
addButton.textContent = "Add note";
addButton.classList.add('add-btn');
addButton.hidden = true;
addButton.addEventListener('click', addNewNote)

for (let column of columns) {
    column.addEventListener('mouseover', showAddBtn);
    column.addEventListener('mouseleave', hideAddBtn);
    column.addEventListener('click', function (event) {
        const target = event.target;
        if (target.dataset.create === '') {
            const card = target.closest('.card');
            if (validateNote(card)) {
                changeNoteStatus(card);
            }
        } else if (target.dataset.delete === '') {
            target.closest('.card').remove();
        } else if (target.dataset.edit === '') {
            const card = target.closest('.card');
            changeNoteStatus(card);
        }
    })
}

function showAddBtn() {
    this.append(addButton);
    addButton.hidden = false;
}

function hideAddBtn() {
    addButton.hidden = true;
    addButton.remove();
}

function addNewNote() {
    const card = createNoteElement("", "", false);
    this.before(card);
}


function createElementFromString(str) {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div.firstElementChild;
}

function createNoteElement(heading, text, isStatic) {
    let noteStr = null;
    if (isStatic) {
        noteStr = `
            <div class="card" data-status="static">
                <h5>${heading}</h5>
                <p>${text}</p>
                <div class="btn-row">
                    <button data-delete class="btn  btn_danger">Delete</button>
                    <button data-edit class="btn btn_warn">Edit</button>
                </div>
            </div>
        `
    } else {
        noteStr = `
            <div class="card" data-status="edit">
                <input type="text" value="${heading}">
                <textarea>${text}</textarea>
                <div class="btn-row">
                    <button data-undo class="btn btn_danger">Undo</button>
                    <button data-create class="btn btn_success">Create</button>
                </div>
            </div>
        `
    }
    return createElementFromString(noteStr);
}

function validateNote(note) {
    const [heading, text] = getNoteData(note);
    const isValid = heading != '' && text != '';
    return isValid;
}

function getNoteData(note) {
    let heading = null;
    let text = null;

    if (note.dataset.status == 'edit') {
        heading = note.querySelector('input').value;
        text = note.querySelector('textarea').value;
    } else {
        heading = note.querySelector('h5').textContent;
        text = note.querySelector('p').textContent;
    }
    return [heading, text];
}

function changeNoteStatus(note) {
    const isStatic = note.dataset.status === 'static';
    const [heading, text] = getNoteData(note);
    const newStatusCard = createNoteElement(heading, text, !isStatic);
    note.replaceWith(newStatusCard);
}