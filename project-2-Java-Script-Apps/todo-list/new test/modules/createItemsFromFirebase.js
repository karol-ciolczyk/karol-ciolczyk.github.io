import { clickAndChange } from "./clickAndChange.js";
import { getItems } from "./getItemsFirebase.js";
import { trashItemFunction } from "./trashEventFunction.js";
import { restoreItemFunction } from "./restoreTrashEventFunction.js";
import { isEmpty } from "./isEmptyTrashContainer.js";

export const createItems = function(){
    getItems()
    .then(data => {
        
        const array = Object.keys(data);    // create array of id-values
        console.log(array);
        const nextArray = array.map(id=>{
            const obj = data[`${id}`];
            obj.id = `${id}`
            return obj;                     // return array of objects from Firebase
        })

        // create new items in DOM
        const trashArea = document.querySelector('.trash-area');
        const todoContainer = document.querySelector('.todo-container');

        nextArray.forEach(object=>{
            const whichIcon = object.moved ? `<span class="material-icons restore">restore_from_trash</span>` : `<span class="material-icons trash">delete</span>`

            let div = document.createElement('div');
            div.classList.add('todo-list-item')
            div.innerHTML = `<p>${object.task}</p><p class="p-tag-date">${object.date}</p><p>${object.place}</p>${whichIcon}<p hidden>${object.id}</p>`


            const trashButton = div.childNodes[3];

            if(object.moved === true){
                trashArea.append(div)
                trashButton.addEventListener('click', restoreItemFunction)
            } else {
                todoContainer.append(div);
                trashButton.addEventListener('click', trashItemFunction)
            }

        })

        // add clickAndChange functionality for items
        const textElements = document.querySelectorAll('.todo-list-item p');
        textElements.forEach(element=>{
            clickAndChange(element);
        })


        isEmpty();
        
    })
    .catch(err => console.log(err))

};