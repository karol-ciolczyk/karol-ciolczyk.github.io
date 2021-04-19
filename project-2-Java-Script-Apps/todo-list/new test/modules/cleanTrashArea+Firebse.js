import {isEmpty} from "./isEmptyTrashContainer.js"
import {removeDocument} from "./firebase/removeDocument-Firebase.js"

export const cleanTrashArea = function(){
    
    const items = document.querySelectorAll('.trash-area .todo-list-item');
    items.forEach(item =>{
        const id = item.getAttribute(`data-id`);
        removeDocument(id);
        
    })

    isEmpty();
}