import { changeIsMovedValue } from "./firebase/changeIsMoved-Firestore.js";
import { isEmpty } from "./isEmptyTrashContainer.js";

export const restoreItemFunction = (event)=>{

    const todoContainer = document.querySelector('.todo-container');
    const task = event.target.parentNode;
    const id = task.getAttribute(`data-id`);
    const iconName = task.childNodes[3];
    
    iconName.textContent = 'delete'  // change icons name = change icon in DOM
    
    // add new key/value to object in localStorage = moved: true;
    changeIsMovedValue(id, false)
    
    todoContainer.append(task);
    
    isEmpty() // change trash-icon if needed
}