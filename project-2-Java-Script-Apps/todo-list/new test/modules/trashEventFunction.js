import { changeItem } from "./changeItemFiebase.js";
import { restoreItemFunction } from "./restoreTrashEventFunction.js";

export const trashItemFunction = (event)=>{

    const trashButton = event.target;
    const trashArea = document.querySelector('.trash-area');
    const task = event.target.parentNode;
    const taskName = task.lastChild.textContent;
    const iconName = task.childNodes[3];
    console.log(taskName);

    event.target.className = `material-icons restore`;
    iconName.textContent = 'restore_from_trash'  // change icons name = change icon
    
    // add new key/value to object in localStorage = moved: true;
    changeItem(taskName, true)
    
    trashArea.append(task);
    trashButton.removeEventListener('click', trashItemFunction);  // trashFunction off
    trashButton.addEventListener('click', restoreItemFunction);   // restoreFunction on
}