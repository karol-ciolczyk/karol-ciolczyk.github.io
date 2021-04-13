export const isEmpty = function(){

    const trashArea = document.querySelectorAll('.trash-area .todo-list-item');
    const trashButton = document.querySelector('.trash-button img');
    const itemsNumber = trashArea.length;
    console.log(trashArea);
    console.log(itemsNumber);
    if(itemsNumber > 0){
        trashButton.setAttribute('src', './trash icons/iconmonstr-trash-can-8-48.png')
    } else{
        trashButton.setAttribute('src', './trash icons/iconmonstr-trash-can-2-48.png')
    }
};