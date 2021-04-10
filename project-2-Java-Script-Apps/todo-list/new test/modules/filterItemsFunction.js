// function for searching for task in Todo-List;

export const filterItems = (string)=>{
    const taskContainers = document.querySelectorAll('.todo-list-item p:first-child')

    Array.from(taskContainers).filter(element=>{
        return !element.innerText.includes(string);
    }).forEach(filtered=>{
        filtered.parentNode.style.display = 'none';
    })
    Array.from(taskContainers).filter(element=>{
        return element.innerText.includes(string);
    }).forEach(filtered=>{
        filtered.parentNode.style.display = '';
    })
}
