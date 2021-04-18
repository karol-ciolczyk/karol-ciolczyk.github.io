export const clickAndChange = (element)=>{
    element.addEventListener('click', event=>{

        if(event.target.className === 'p-tag-date'){
            
            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'date')
            newInput.setAttribute('value', `${event.target.textContent}`)
            newInput.classList.add('todo-list-input');
            event.target.textContent = ``;
            event.target.prepend(newInput);
            newInput.focus();

            //MULTIPLE EVENTLISTENER FOR TEXT CONTENT
            // THERE IS AN ERROR WHEN BLUR AND CHANGE EVENTLISTENER EXIST TOGETHER

            const changeContent = e=>{
                event.target.textContent = `${e.target.value}`;
                e.stopPropagation();
            }
        newInput.addEventListener('blur', changeContent, false);
        newInput.addEventListener('change', changeContent, false);
        } else if(event.target.tagName === `P`){
            // Change text to input afterd click
            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('value', `${event.target.textContent}`)
            newInput.classList.add('todo-list-input');
            event.target.textContent = ``;
            event.target.prepend(newInput);
            newInput.focus();

            //MULTIPLE EVENTLISTENER FOR TEXT CONTENT
            // THERE IS AN ERROR WHEN BLUR AND CHANGE EVENTLISTENER EXIST TOGETHER

            const changeContent = e=>{
                event.target.textContent = `${e.target.value}`;
                e.stopPropagation();
            }
            newInput.addEventListener('blur', changeContent, false);
            newInput.addEventListener('change', changeContent, false);
        }  
    })
}