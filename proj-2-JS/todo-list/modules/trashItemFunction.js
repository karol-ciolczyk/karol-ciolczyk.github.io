import { changeIsMovedValue } from "./firebase/changeIsMoved-Firestore.js";
import { isEmpty } from "./isEmptyTrashContainer.js";

export const trashItem = (event)=>{

    const trashArea = document.querySelector('.trash-area');
    const task = event.target.parentNode;
    const id = task.getAttribute(`data-id`);
    const iconName = task.childNodes[3];

    iconName.textContent = 'restore_from_trash'  // change icons name = change icon
    
    // add new key/value to object in firestone = moved: true;
    changeIsMovedValue(id, true);
    
    trashArea.append(task);

    isEmpty(); // change trash-icon if needed
}