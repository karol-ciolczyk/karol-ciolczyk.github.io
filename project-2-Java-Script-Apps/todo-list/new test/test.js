import {clickAndChange} from "./modules/clickAndChange.js";
import {createTodoListItems} from "./modules/createListItemFromLocalStorage.js"
import {filterItems} from "./modules/filterItemsFunction.js";
import {trashItemFunction} from "./modules/trashEventFunction.js"
import {restoreItemFunction} from "./modules/restoreTrashEventFunction.js"
import {createItems} from "./modules/createItemsFromFirebase.js";
import {addItem} from './modules/addItemFrebase.js'
import { getItems } from "./modules/getItemsFirebase.js";

const todoForm = document.forms.formTodo;
// inputs of ToDo Form
const taskInput = todoForm.case;
const taskDate = todoForm.when;
const taskPlace = todoForm.where;



todoForm.addEventListener('submit', event=>{
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

    // add new item to Firebase
    addItem(newObject)
    // // json to localStorage
    // localStorage.setItem(`${newObject.utc}`, JSON.stringify(newObject))

    getItems()
    .then(data => {
        const array = Object.keys(data);
        const lastElement = array[array.length-1];

        //place new item in todo-container
        const todoContainer = document.querySelector('.todo-container');
        const div = document.createElement('div');
        div.classList.add('todo-list-item')
        div.innerHTML = `<p>${task}</p><p class="p-tag-date">${date}</p><p>${place}</p><span class="material-icons trash">delete</span><p hidden>${lastElement}</p>`
        const trashButton = div.childNodes[3];
        trashButton.addEventListener('click', trashItemFunction)  // for trashButton - trashFunction on
        clickAndChange(div);
        todoContainer.prepend(div);
    })
    .catch(err=>console.log(err));
    
    // todoForm.reset();
})




// Function gets objects from Firebase and create Todo-List items
createItems();

// Add event listener to list-items. - (functionality click and change value)

const textElements = document.querySelectorAll('.todo-list-item p');

textElements.forEach(element=>{
    clickAndChange(element);
})


// ACTIONS FOR SEARCH BUTTON AND SEARCHING ELEMENTS
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-container input');


searchButton.addEventListener('click', ()=>{
    searchInput.style.display = 'block';
    setTimeout(()=>{
        searchInput.focus();
    },350)
})

searchInput.addEventListener('blur', ()=>{
    searchInput.style.display = 'none';
})

searchInput.addEventListener('keyup', ()=>{
    const term = searchInput.value.trim();

    filterItems(term);
})


// Event listener - trash button in list-items

const trash = document.querySelectorAll('.trash');

trash.forEach(element=>{
    element.addEventListener('click', trashItemFunction)
})


//  Trash-button event. Show/Hide trash-section

const trashSection = document.querySelector('.trash-section');
const trashButton = document.querySelector('.trash-button');

trashButton.addEventListener('click', ()=>{
    trashSection.style.display = 'block';

    trashSection.addEventListener('click', event=>{

        if(event.target.tagName === `SECTION`){
            trashSection.style.display = '';
        }
    })
})


const restoreTrashButtons = document.querySelectorAll('.restore');

restoreTrashButtons.forEach(element=>{
    element.addEventListener('click', restoreItemFunction);
})


