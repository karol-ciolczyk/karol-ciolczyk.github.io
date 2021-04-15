
const todoContainer = document.querySelector('.todo-container');

export const addTrashListener = function(){

    todoContainer.addEventListener('click', event=>{
        console.log(event.target.className)

        if(event.target.className.includes(`trash`)){
            console.log(`googoogogogogodddd`);
        }
    })
}