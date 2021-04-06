export {createTodoListItems};

// Function gets objects from LocalStorage and create Todo-List items
const createTodoListItems = function(){
    let array = [];

    for(let i=0; i<localStorage.length; i++){
        const jsonFromLS = localStorage.getItem(`${localStorage.key(i)}`)
        const jsonToObject = JSON.parse(jsonFromLS)
        array.push(jsonToObject);
    }

    // Take elements from array and create then put new item in todo-container
    array.forEach(object=>{
        const todoContainer = document.querySelector('.todo-container');

        let div = document.createElement('div');
        div.classList.add('todo-list-item')
        div.innerHTML = `<p>${object.task}</p><p class="p-tag-date">${object.date}</p><p>${object.place}</p><span class="material-icons trash">delete</span>`
        todoContainer.append(div);
    })
}




