import { changeValue } from "./firebase/changeValue-Firestore.js";

export const clickAndChange = (element) => {
    element.addEventListener('click', event => {

        if (event.target.className === 'p-tag-date') {

            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'date')
            newInput.setAttribute('value', `${event.target.textContent}`)
            newInput.classList.add('todo-list-input');
            event.target.textContent = ``;
            event.target.prepend(newInput);
            newInput.focus();
                    
            //MULTIPLE EVENTLISTENER FOR TEXT CONTENT
            // THERE IS AN ERROR WHEN BLUR AND CHANGE EVENTLISTENER EXIST TOGETHER

            const changeContent = (e) => {
                const inputValue = e.target.value;
                const object = { date: `${inputValue}` };
                const id = e.target.parentNode.parentNode.getAttribute('data-id');

                event.target.textContent = `${inputValue}`;
                changeValue(id, object);
                e.stopPropagation();
            }
            newInput.addEventListener('blur', changeContent, false);
            newInput.addEventListener('change', changeContent, false);
        } else if (event.target.tagName === `P`) {
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

            const changeContent = (e) => {
                const inputValue = e.target.value;
                const id = event.target.parentNode.getAttribute('data-id')
                const attributeName = event.target.getAttributeNames()[0]  // attribute name to identify element
                event.target.textContent = `${inputValue}`;
                if (attributeName === `place`) {
                    const object = { place: inputValue }
                    changeValue(id, object);
                } else if (attributeName === `task`) {
                    const object = { task: inputValue }
                    changeValue(id, object);
                }
                e.stopPropagation();
            }
            newInput.addEventListener('blur', changeContent, false);
            newInput.addEventListener('change', changeContent, false);
        }
    })
}