import {clickAndChange} from "./modules/clickAndChange.js";
import {createTodoListItems} from "./modules/createListItemFromLocalStorage.js"

const todoForm = document.forms.formTodo;
// inputs of ToDo Form
const taskInput = todoForm.case;
const taskDate = todoForm.when;
const taskPlace = todoForm.where;



todoForm.addEventListener('submit', event=>{
    event.preventDefault();
    console.log(taskInput.value);
    console.log(taskDate.value);
    console.log(taskPlace.value);

    let newObject = {
        task: taskInput.value,
        date: taskDate.value,
        place: taskPlace.value
    }

    // json to localStorage
    localStorage.setItem(`${newObject.task}`, JSON.stringify(newObject))

    //place new item in todo-container
    const todoContainer = document.querySelector('.todo-container');
    let div = document.createElement('div');
    div.classList.add('todo-list-item')
    div.innerHTML = `<p>${newObject.task}</p><p class="p-tag-date">${newObject.date}</p><p>${newObject.place}</p> <span class="material-icons trash">delete</span>`
    clickAndChange(div);
    todoContainer.prepend(div);
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

// function to filter search-elements;
const filterItems = (string)=>{
    const taskContainers = document.querySelectorAll('.todo-list-item p:first-child')

    Array.from(taskContainers).filter(element=>{
        return !element.innerText.includes(string);
    }).forEach(filtered=>{
        filtered.parentNode.style.display = 'none';
    })
    Array.from(taskContainers).filter(element=>{
        return element.innerText.includes(string);
    }).forEach(filtered=>{
        filtered.parentNode.style.display = '';
    })
}



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
console.log(trash);
trash.forEach(element=>{
    element.addEventListener('click', event=>{
        console.log(event.target.parentNode)
        event.target.parentNode.remove();
    })
})


