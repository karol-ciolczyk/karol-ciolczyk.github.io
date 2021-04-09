import {clickAndChange} from "./modules/clickAndChange.js";
import {createTodoListItems} from "./modules/createListItemFromLocalStorage.js"
import { objectFromLS } from "./modules/functionObjectFromLS.js";

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
    let div = document.createElement('div');
    div.classList.add('todo-list-item')
    div.innerHTML = `<p>${newObject.task}</p><p class="p-tag-date">${newObject.date}</p><p>${newObject.place}</p> <span class="material-icons trash">delete</span>`
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

const trashArea = document.querySelector('.trash-area');
const trash = document.querySelectorAll('.trash');

trash.forEach(element=>{
    element.addEventListener('click', event=>{
        const task = event.target.parentNode;
        const taskName = task.lastChild.textContent;
        
        task.childNodes[3].textContent = 'restore_from_trash'  // change icons name = change icon

        const taskObject = objectFromLS(taskName)
        taskObject.moved = true;
        localStorage.setItem(taskName, JSON.stringify(taskObject) )

        trashArea.append(task);

    })
})


//  Trash-button event. Show/Hide trash-section

const trashSection = document.querySelector('.trash-section');
const trashButton = document.querySelector('.trash-button');

trashButton.addEventListener('click', event=>{
    trashSection.style.display = 'block';

    trashSection.addEventListener('click', event=>{
        console.log(event.target);

        if(event.target.tagName === `SECTION`){
            trashSection.style.display = '';
        }
    })
})
