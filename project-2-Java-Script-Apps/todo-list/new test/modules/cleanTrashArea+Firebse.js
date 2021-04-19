import {isEmpty} from "./isEmptyTrashContainer.js"
import {removeItem} from "./removeItemFitebase.js";

export const cleanTrashArea = function(){
    
    const items = document.querySelectorAll('.trash-area .todo-list-item');
    const array = Array.from(items).map(div => div.lastChild.textContent)
    items.forEach( item => item.remove() )
    array.forEach( id => removeItem(id) )

    isEmpty();
}