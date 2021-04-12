import { objectFromLS } from "./functionObjectFromLS.js";
import { trashItemFunction } from "./trashEventFunction.js";

export const restoreItemFunction = (event)=>{

    const restoreButton = event.target;
    const todoContainer = document.querySelector('.todo-container');
    const task = event.target.parentNode;
    const taskName = task.lastChild.textContent;
    console.log(event); 
    
    event.target.className = `material-icons trash`;
    task.childNodes[3].textContent = 'delete'  // change icons name = change icon in DOM
    
    // add new key/value to object in localStorage = moved: true;
    const taskObject = objectFromLS(taskName)
    taskObject.moved = false;
    localStorage.setItem(taskName, JSON.stringify(taskObject) )
    
    todoContainer.append(task);

    restoreButton.removeEventListener('click', restoreItemFunction);  // restoreFunction off
    restoreButton.addEventListener('click', trashItemFunction)        // trashFunction on
}
