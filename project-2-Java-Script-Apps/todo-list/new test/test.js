import {clickAndChange} from "./modules/clickAndChange.js";
import {createTodoListItems} from "./modules/createListItemFromLocalStorage.js"
import { objectFromLS } from "./modules/functionObjectFromLS.js";
import {filterItems} from "./modules/filterItemsFunction.js";
import {trashItemFunction} from "./modules/trashEventFunction.js"
import {restoreItemFunction} from "./modules/restoreTrashEventFunction.js"

const todoForm = document.forms.formTodo;
// inputs of ToDo Form
const taskInput = todoForm.case;
const taskDate = todoForm.when;
const taskPlace = todoForm.where;



todoForm.addEventListener('submit', event=>{
    event.preventDefault();
    let presentDate = new Date();
    let presentTime = presentDate.toLocaleString()

    const task = taskInput.value;
    const date = taskDate.value;
    const place = taskPlace.value;


    let newObject = {
        task: task,
        date: date,
        place: place,
        utc: presentTime
    }
    // json to localStorage
    localStorage.setItem(`${newObject.utc}`, JSON.stringify(newObject))

    //place new item in todo-container
    const todoContainer = document.querySelector('.todo-container');
    const div = document.createElement('div');
    div.classList.add('todo-list-item')
    div.innerHTML = `<p>${task}</p><p class="p-tag-date">${date}</p><p>${place}</p><span class="material-icons trash">delete</span><p hidden>${presentTime}</p>`
    console.log(div.childNodes)
    div.childNodes[3].addEventListener('click', trashItemFunction)  // for trashButton - trashFunction on
    clickAndChange(div);
    todoContainer.prepend(div);

    // todoForm.reset();
})




// Function gets objects from LocalStorage and create Todo-List items
createTodoListItems()


// Add event listener to list-items. - (functionality click and change value)

const spanTextElement = document.querySelectorAll('.todo-list-item p');

spanTextElement.forEach(element=>{
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
        console.log(event.target);

        if(event.target.tagName === `SECTION`){
            trashSection.style.display = '';
        }
    })
})


const restoreTrashButtons = document.querySelectorAll('.restore');

restoreTrashButtons.forEach(element=>{
    element.addEventListener('click', restoreItemFunction);
})


