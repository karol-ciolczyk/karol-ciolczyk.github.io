import { clickAndChange } from "./modules/clickAndChange.js";
import { filterItems } from "./modules/filterItemsFunction.js";
import { trashItem } from "./modules/trashItemFunction.js"
import { restoreItemFunction } from "./modules/restoreTrashEventFunction.js"
import { getLocation } from "./modules/weatherApp/getLocation.js";
import { addDocument } from "./modules/firebase/addDocument-Firestore.js";
import { getCollection } from "./modules/firebase/getCollectionFirestore.js";
import { isEmpty } from "./modules/isEmptyTrashContainer.js";
import { removeDocument } from "./modules/firebase/removeDocument-Firebase.js";


const todoForm = document.forms.formTodo;
// inputs of ToDo Form
const taskInput = todoForm.case;
const taskDate = todoForm.when;
const taskPlace = todoForm.where;




getCollection(`tasks`).onSnapshot((items) => {
    items.docChanges().forEach(item => {

        const itemId = item.doc.id;
        const task = item.doc.data().task;
        const date = item.doc.data().date;
        const place = item.doc.data().place;
        const isMoved = item.doc.data().moved;

        if (item.type === `added`) {
            //place new item in todo-container
            const todoContainer = document.querySelector('.todo-container');
            const div = document.createElement('div');
            div.classList.add('todo-list-item')
            div.setAttribute('data-id', `${itemId}`)
            if (!isMoved) {
                div.innerHTML = `<p task>${task}</p><p class="p-tag-date">${date}</p><p place>${place}</p><span class="material-icons garbage">delete</span>`
                clickAndChange(div);
                todoContainer.prepend(div);
            } else {
                div.innerHTML = `<p>${task}</p><p class="p-tag-date">${date}</p><p>${place}</p><span class="material-icons garbage">restore_from_trash</span>`
                clickAndChange(div);
                trashArea.append(div)
            }
        } else if (item.type === `removed`) {
            const listElement = document.querySelector(`div[data-id="${itemId}"]`)
            listElement.remove();
        }
    })

    isEmpty();  // it checks if trash-area is empty and change icon if needed
})


// Add document to firestor collection:
todoForm.addEventListener('submit', event => {
    event.preventDefault();

    const task = taskInput.value;
    const date = taskDate.value;
    const place = taskPlace.value;


    let newObject = {
        moved: false,
        task: task,
        date: date,
        place: place,
    }

    // ADD DOCUMENT TO Collection
    addDocument(newObject);
})


// Add event listener to list-items. - (functionality click and change value)
const textElements = document.querySelectorAll('.todo-list-item p');

textElements.forEach(element => {
    clickAndChange(element);
})


// ACTIONS FOR SEARCH BUTTON AND SEARCHING ELEMENTS
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-container input');


searchButton.addEventListener('click', () => {
    searchInput.style.display = 'block';
    setTimeout(() => {
        searchInput.focus();
    }, 350)
})

searchInput.addEventListener('blur', () => {
    searchInput.style.display = 'none';
})

searchInput.addEventListener('keyup', () => {
    const term = searchInput.value.trim();

    filterItems(term);
})


// Trash-button event. Show/Hide trash-section

const trashSection = document.querySelector('.trash-section');
const trashButton = document.querySelector('.trash-button');

trashButton.addEventListener('click', () => {
    trashSection.style.display = 'block';

    trashSection.addEventListener('click', event => {

        if (event.target.tagName === `SECTION`) {
            trashSection.style.display = '';
        }
    })
})

// clean-button in trash-area:

const cleanButton = document.querySelector('.clean-button');
cleanButton.addEventListener('click', () => {
    const elements = document.querySelectorAll('.trash-area .todo-list-item');
    elements.forEach(element => {
        const id = element.getAttribute(`data-id`);
        removeDocument(id);
    })
    isEmpty();
})



// listener for todo-container - in order to remove todo's item
const todoContainer = document.querySelector('.todo-container');

todoContainer.addEventListener('click', event => {
    if (event.target.className.includes(`garbage`)) {
        trashItem(event)
    }
})

// listener for trash-container - in order to restore todo's item back
const trashArea = document.querySelector('.trash-area');

trashArea.addEventListener('click', event => {
    if (event.target.className.includes('garbage')) {
        restoreItemFunction(event);
    }
})




////////////////////////////////////////////////


const whatCity = document.querySelector('.whatCity');
const inp = document.querySelector('.whatCity input')
whatCity.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(inp.value);
    let city = inp.value;

getLocation(city);
})
