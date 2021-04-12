
export const addItem = function(object){
    fetch(`https://todo-list-bae9a-default-rtdb.europe-west1.firebasedatabase.app/data/items.json`, {
        method: `POST`,
        body: JSON.stringify(object)
    })
    .catch(err => console.log(err))
}