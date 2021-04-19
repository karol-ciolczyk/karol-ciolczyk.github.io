export const getItems = function(){
    return fetch(`https://todo-list-bae9a-default-rtdb.europe-west1.firebasedatabase.app/data/items.json`)
            .then(response => response.json())
}