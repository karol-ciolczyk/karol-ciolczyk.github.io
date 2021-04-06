const todoForm = document.forms.formTodo;
// inputs of ToDo Form
const taskInput = todoForm.case;
const taskDate = todoForm.when;
const taskPlace = todoForm.where;



todoForm.addEventListener('submit', event=>{
    // event.preventDefault();
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
    div.innerHTML = `<p>${newObject.task}</p><p class="p-tag-date">${newObject.date}</p><p>${newObject.place}</p> <span class="material-icons">delete</span>`
    todoContainer.prepend(div);
})




// Function gets objects from LocalStorage and return array
const getItemsFromLocalStorage = function(){
    let array = [];

    for(let i=0; i<localStorage.length; i++){
        const jsonFromLS = localStorage.getItem(`${localStorage.key(i)}`)
        const jsonToObject = JSON.parse(jsonFromLS)
        array.push(jsonToObject);
    }
    return array;
}




// Take elements from array and create then put new item in todo-container
const itemsFromLS = getItemsFromLocalStorage();
console.log(itemsFromLS);

itemsFromLS.forEach(object=>{
    const todoContainer = document.querySelector('.todo-container');

    let div = document.createElement('div');
    div.classList.add('todo-list-item')
    div.innerHTML = `<p>${object.task}</p><p class="p-tag-date">${object.date}</p><p>${object.place}</p><span class="material-icons">delete</span>`
    todoContainer.append(div);

})




// Add event listener to list-items.

const spanTextElement = document.querySelectorAll('.todo-list-item p');

spanTextElement.forEach(element=>{
    element.addEventListener('click', event=>{
        console.log(event.target.className)

        if(event.target.className === 'p-tag-date'){
            
            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'date')
            newInput.setAttribute('value', `${event.target.textContent}`)
            newInput.classList.add('todo-list-input');
            event.target.textContent = ``;
            event.target.prepend(newInput);
            newInput.focus();

            //MULTIPLE EVENTLISTENER FOR TEXT CONTENT
            // THERE IS AN ERROR WHEN BLUR AND CHANGE EVENTLISTENER EXIST TOGETHER

            const changeContent = e=>{
                event.target.textContent = `${e.target.value}`;
                e.stopPropagation();
            }
        newInput.addEventListener('blur', changeContent, false);
        newInput.addEventListener('change', changeContent, false);
        } else {
            // Change text to input afterd click
            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('value', `${event.target.textContent}`)
            newInput.classList.add('todo-list-input');
            event.target.textContent = ``;
            event.target.prepend(newInput);
            newInput.focus();

            //MULTIPLE EVENTLISTENER FOR TEXT CONTENT
            // THERE IS AN ERROR WHEN BLUR AND CHANGE EVENTLISTENER EXIST TOGETHER

            const changeContent = e=>{
                event.target.textContent = `${e.target.value}`;
                e.stopPropagation();
            }
            newInput.addEventListener('blur', changeContent, false);
            newInput.addEventListener('change', changeContent, false);
        }  
    })
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

searchInput.addEventListener('keyup', event=>{
    const term = searchInput.value.trim();

    filterItems(term);
})