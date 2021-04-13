export const changeItem= function(id, boolean){
    return fetch(`https://todo-list-bae9a-default-rtdb.europe-west1.firebasedatabase.app/data/items/${id}.json`,{
        method: `PATCH`,
        body: JSON.stringify({moved: boolean})
    })
}