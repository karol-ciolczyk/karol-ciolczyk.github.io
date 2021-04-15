import { changeItem } from "./changeItemFiebase.js";
import { isEmpty } from "./isEmptyTrashContainer.js";

export const trashItem = (event)=>{

    const trashArea = document.querySelector('.trash-area');
    const task = event.target.parentNode;
    const taskName = task.lastChild.textContent;

    task.childNodes[3].textContent = 'restore_from_trash'  // change icons name = change icon
    
    // add new key/value to object in firestone = moved: true;
    changeItem(taskName, true)
    
    trashArea.append(task);

    isEmpty(); // change trash-icon if needed
}