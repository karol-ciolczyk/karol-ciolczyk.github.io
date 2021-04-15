import { changeItem }from "./changeItemFiebase.js"
import { isEmpty } from "./isEmptyTrashContainer.js";

export const restoreItemFunction = (event)=>{

    const todoContainer = document.querySelector('.todo-container');
    const task = event.target.parentNode;
    const taskName = task.lastChild.textContent;
    
    task.childNodes[3].textContent = 'delete'  // change icons name = change icon in DOM
    
    // add new key/value to object in localStorage = moved: true;
    changeItem(taskName, false)
    
    todoContainer.append(task);
    
    isEmpty() // change trash-icon if needed
}
