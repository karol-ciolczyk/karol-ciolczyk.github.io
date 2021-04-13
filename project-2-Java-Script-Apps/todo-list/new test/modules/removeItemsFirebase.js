export const removeItems = function(){
    fetch(`https://todo-list-bae9a-default-rtdb.europe-west1.firebasedatabase.app/data/items.json`, {
        method:'DELETE'
    })
};