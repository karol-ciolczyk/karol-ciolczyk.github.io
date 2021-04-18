import { trashItemFunction } from "./trashEventFunction.js";
import { changeItem }from "./changeItemFiebase.js"

export const restoreItemFunction = (event)=>{

    const restoreButton = event.target;
    const todoContainer = document.querySelector('.todo-container');
    const task = event.target.parentNode;
    const taskName = task.lastChild.textContent;
    const iconName = task.childNodes[3];
    console.log(event); 
    
    event.target.className = `material-icons trash`;
    iconName.textContent = 'delete'  // change icons name = change icon in DOM
    
    // add new key/value to object in localStorage = moved: true;
    changeItem(taskName, false)
    
    todoContainer.append(task);

    restoreButton.removeEventListener('click', restoreItemFunction);  // restoreFunction off
    restoreButton.addEventListener('click', trashItemFunction)        // trashFunction on
}
