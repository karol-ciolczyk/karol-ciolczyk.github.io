import { clickAndChange } from "./clickAndChange.js";
import { getItems } from "./getItemsFirebase.js";
import { isEmpty } from "./isEmptyTrashContainer.js";

export const createItems = function(data){
        
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
            const whichIcon = object.moved ? `<span class="material-icons garbage">restore_from_trash</span>` : `<span class="material-icons garbage">delete</span>`

            let div = document.createElement('div');
            div.classList.add('todo-list-item')
            div.innerHTML = `<p>${object.task}</p><p class="p-tag-date">${object.date}</p><p>${object.place}</p>${whichIcon}<p hidden>${object.id}</p>`


            if(object.moved === true){
                trashArea.append(div)
            } else {
                todoContainer.append(div);
            }

        })

        // add clickAndChange functionality for items
        const textElements = document.querySelectorAll('.todo-list-item p');
        textElements.forEach(element=>{
            clickAndChange(element);
        })


        isEmpty();
};