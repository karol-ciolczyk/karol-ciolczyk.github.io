const todoForm = document.forms.formTodo;
// inputs of Form ToDo
const taskInput = todoForm.case;
const taskDate = todoForm.when;
const taskPlace = todoForm.where;


// Function gets objects from LocalStorage and place to array
const getItemsFromLocalStorage = function(){
    let array = [];

    for(let i=0; i<localStorage.length; i++){
        const jsonFromLS = localStorage.getItem(`${localStorage.key(i)}`)
        const jsonToObject = JSON.parse(jsonFromLS)
        array.push(jsonToObject);
    }
    return array;
}

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

    localStorage.setItem(`${newObject.task}`, JSON.stringify(newObject))
})

const itemsFromLS = getItemsFromLocalStorage();
console.log(itemsFromLS);

itemsFromLS.forEach(object=>{
    const todoContainer = document.querySelector('.todo-container');

    let div = document.createElement('div');
    div.innerHTML = `<span>${object.task} / </span><span>${object.date} / </span><span>${object.place}</span>`
    todoContainer.append(div);
})