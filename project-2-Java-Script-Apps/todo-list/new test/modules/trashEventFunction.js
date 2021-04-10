import { objectFromLS } from "./functionObjectFromLS.js";

export const trashEventFunction = (event)=>{

    const trashArea = document.querySelector('.trash-area');
    const task = event.target.parentNode;
    const taskName = task.lastChild.textContent;
    
    event.target.className = `material-icons restore`;
    task.childNodes[3].textContent = 'restore_from_trash'  // change icons name = change icon
    
    // add new key/value to object in localStorage = moved: true;
    const taskObject = objectFromLS(taskName)
    taskObject.moved = true;
    localStorage.setItem(taskName, JSON.stringify(taskObject) )
    
    trashArea.append(task);

    event.target.removeEventListener('click', trashEventFunction);
}

