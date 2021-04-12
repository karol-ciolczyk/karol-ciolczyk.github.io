import { objectFromLS } from "./functionObjectFromLS.js";
import { restoreItemFunction } from "./restoreTrashEventFunction.js";

export const trashItemFunction = (event)=>{

    const trashButton = event.target;
    const trashArea = document.querySelector('.trash-area');
    const task = event.target.parentNode;
    const taskName = task.lastChild.textContent;
    
    event.target.className = `material-icons restore`;
    task.childNodes[3].textContent = 'restore_from_trash'  // change icons name = change icon
    
    // add new key/value to object in localStorage = moved: true;
    const taskObject = objectFromLS(taskName)
    console.log(taskObject);
    taskObject.moved = true;
    localStorage.setItem(taskName, JSON.stringify(taskObject) )
    
    trashArea.append(task);

    trashButton.removeEventListener('click', trashItemFunction);  // trashFunction off
    trashButton.addEventListener('click', restoreItemFunction);   // restoreFunction on
}

