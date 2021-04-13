export const removeItem = function(id){
    fetch(`https://todo-list-bae9a-default-rtdb.europe-west1.firebasedatabase.app/data/items/${id}.json`, {
        method:'DELETE'
    })
};