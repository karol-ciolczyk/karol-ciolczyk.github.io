import {clickAndChange} from "./modules/clickAndChange.js";
import {filterItems} from "./modules/filterItemsFunction.js";
import {trashItem} from "./modules/trashItemFunction.js"
import {restoreItemFunction} from "./modules/restoreTrashEventFunction.js"
import {createItems} from "./modules/createItemsFromFirebase.js";
import {addItem} from './modules/addItemFrebase.js'
import { getItems } from "./modules/getItemsFirebase.js";
import { getLocation } from "./modules/weatherApp/getLocation.js";
import { cleanTrashArea } from "./modules/cleanTrashArea+Firebse.js";


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

    // take items from Firebase and place into todo-list
    getItems()
    .then(data => {
        const array = Object.keys(data);
        const lastElement = array[array.length-1];

        //place new item in todo-container
        const todoContainer = document.querySelector('.todo-container');
        const div = document.createElement('div');
        div.classList.add('todo-list-item')
        div.innerHTML = `<p>${task}</p><p class="p-tag-date">${date}</p><p>${place}</p><span class="material-icons garbage">delete</span><p hidden>${lastElement}</p>`
        clickAndChange(div);
        todoContainer.prepend(div);
    })
    .catch(err=>console.log(err));
    
    // todoForm.reset();

})




// Function gets objects from Firebase and create Todo-List items
getItems()
  .then(createItems)
  .catch(console.log);

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


// delete-button: trash-area

const cleanButton = document.querySelector('.clean-button');

cleanButton.addEventListener('click', ()=>{
    cleanTrashArea();
})



// listener for todo-container - in order to remove todo's item
const todoContainer = document.querySelector('.todo-container');

todoContainer.addEventListener('click', event=>{

    if(event.target.className.includes(`garbage`)){
        trashItem(event)
    }
})

// listener for trash-container - in order to restore todo's item back
const trashArea = document.querySelector('.trash-area');

trashArea.addEventListener('click', event=>{
    console.log(event.target)
    if(event.target.className.includes('garbage')){
        restoreItemFunction(event);
    }
})




////////////////////////////////////////////////



const whatCity = document.querySelector('.whatCity');
const inp = document.querySelector('.whatCity input')
whatCity.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(inp.value);
    let city = inp.value;


getLocation(city);
})

// getLocation(`Alwernia`);
