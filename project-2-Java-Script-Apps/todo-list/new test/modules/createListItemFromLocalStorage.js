
// Function gets objects from LocalStorage and create Todo-List items
export const createTodoListItems = function(){
    let array = [];

    for(let i=0; i<localStorage.length; i++){
        const jsonFromLS = localStorage.getItem(`${localStorage.key(i)}`)
        const jsonToObject = JSON.parse(jsonFromLS)
        array.push(jsonToObject);
    }

    // Take object from array and create new item then place in todo-container
    const trashArea = document.querySelector('.trash-area');
    const todoContainer = document.querySelector('.todo-container');

    array.forEach(object=>{
        const whichIcon = object.moved ? `<span class="material-icons restore">restore_from_trash</span>` : `<span class="material-icons trash">delete</span>`

        let div = document.createElement('div');
        div.classList.add('todo-list-item')
        div.innerHTML = `<p>${object.task}</p><p class="p-tag-date">${object.date}</p><p>${object.place}</p>${whichIcon}<p hidden>${object.utc}</p>`
        console.log(object.moved);
        if(object.moved === true){
            trashArea.append(div)
        } else {
            todoContainer.append(div);
        }

    })
}