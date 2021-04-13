import { changeItem } from "./changeItemFiebase.js";
import { isEmpty } from "./isEmptyTrashContainer.js";
import { restoreItemFunction } from "./restoreTrashEventFunction.js";

export const trashItemFunction = (event)=>{

    const trashButton = event.target;
    const trashArea = document.querySelector('.trash-area');
    const task = event.target.parentNode;
    const taskName = task.lastChild.textContent;
    console.log(taskName);

    event.target.className = `material-icons restore`;
    task.childNodes[3].textContent = 'restore_from_trash'  // change icons name = change icon
    
    // add new key/value to object in localStorage = moved: true;
    changeItem(taskName, true)
    
    trashArea.append(task);
    trashButton.removeEventListener('click', trashItemFunction);  // trashFunction off
    trashButton.addEventListener('click', restoreItemFunction);   // restoreFunction on

    isEmpty(); // change trash-icon if needed
}