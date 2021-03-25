const form = document.querySelector('.formTodo');
const caseTodo = document.forms.formTodo.case;
const whenTodo = document.forms.formTodo.when;
const whereTodo = document.forms.formTodo.where;
const checkbox = document.forms.formTodo.checkbox;

//LIST ADDED ELEMENTS:

const whatElementsList = document.querySelector('.whatList')
const whenList = document.querySelector('.whenList');
const whereList = document.querySelector('.whereList');
const checkedList = document.querySelector('.checkedlist')


// SHOW TODO LIST ELEMENST AFTER REOPEN SESION:
for(i=0; i<localStorage.length; i++){

    // what list elements:
    const whatLi = document.createElement('li');
    whatLi.classList.add('changeText');
    whatLi.classList.add('remove');
    whatLi.classList.add('localStorage-'+`${i}`);
    whatLi.textContent = `${JSON.parse(localStorage.getItem(localStorage.key(i))).what}`
    document.querySelector('.whatList').prepend(whatLi);
    // when list elements:
    const whenLi = document.createElement('li');
    whenLi.classList.add('changeDate')
    whenLi.classList.add('remove');
    whenLi.classList.add('localStorage-'+`${i}`);
    whenLi.textContent = `${JSON.parse(localStorage.getItem(localStorage.key(i))).when}`
    document.querySelector('.whenList').prepend(whenLi);
    // where list elements:
    const whereLi = document.createElement('li');
    whereLi.classList.add('changeText');
    whereLi.classList.add('remove');
    whereLi.classList.add('localStorage-'+`${i}`);
    whereLi.textContent = `${JSON.parse(localStorage.getItem(localStorage.key(i))).where}`
    document.querySelector('.whereList').prepend(whereLi);

    // done list elements:
    const div = document.createElement('div');
    div.classList.add('checkbox-button-container')

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'checkbox');
    input.setAttribute('class', 'checkbox-localStorageElement');
    input.classList.add('localStorage-'+`${i}`);

    //create trash button
    const trashIcon = document.createElement('span');
    trashIcon.classList.add('material-icons');
    trashIcon.classList.add('localStorage-'+`${i}`);
    trashIcon.textContent = 'delete_forever';

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'trash');
    button.classList.add('localStorage-'+`${i}`);

    //place div and trash button + checkbox inside div
    document.querySelector('.checkedlist').prepend(div);
    document.querySelector('.checkbox-button-container').prepend(input);
    document.querySelector('.checkbox-button-container').append(button);
    document.querySelector('.trash').append(trashIcon);

}

// ADD ACTION TO CHECKBOX AND TRASH BUTTON FOR ELEMENTS FROM LOCALSTORAGE

    // LocalStorage Elements: if checkox checked add class: remove
    const removeElements = document.querySelectorAll('.remove');
    //check if class:checkbox exist 
    if(document.querySelector('.checkbox-localStorageElement')){
        if(!document.querySelector('.checkbox-localStorageElement').checked){
        
            removeElements.forEach(e=>{
                e.classList.remove('remove');
            });
        }
    }
    

    const check = document.querySelectorAll('.checkbox-localStorageElement')
    check.forEach(e=>{
        e.addEventListener('click', e=>{
            const ifChecked = e.target.checked;
            const checkboxRemover = document.querySelectorAll(`.${e.toElement.className.substring(29)}`);
            checkboxRemover.forEach(e=>{
                console.log(e);
                if(e.tagName === 'LI' && ifChecked){
                    e.classList.add('remove');
                } else {
                    e.classList.remove('remove');
                }
            })
        })
    });

// trash button's action for localStorage's elements after reopen session:
const trashButtons = document.querySelectorAll('.trash');
trashButtons.forEach(e=>{
    e.addEventListener('click', e=>{
        //sets for icon inside button
        if(e.target.tagName === 'SPAN'){
            console.log(e.target.className.substring(15));
            const keyValue = document.querySelector(`.whatList>.${e.target.className.substring(15)}`).textContent;
            const sameClass = document.querySelectorAll(`.${e.target.className.substring(15)}`)
            sameClass.forEach(e=>{
                e.remove();
                localStorage.removeItem(keyValue);
            })
        }
        //all elements with same class-name
        if(e.target.tagName === 'BUTTON'){
            const keyValue = document.querySelector(`.whatList>.${e.target.className.substring(6)}`).textContent;
            const sameClass = document.querySelectorAll(`.${e.target.className.substring(6)}`)
            sameClass.forEach(e=>{
                e.remove();
                localStorage.removeItem(keyValue);
            })
        }
    })
});
    
//////////////////////////////////////////////////////////////////////////////

//ADD EVENT LISTENER SUBMIT TO INPUTS AREA TO TODOLIST

let elNumber = 0; // increasing number to add class:`current-number-${elNumber}` for remove line by trash button

form.addEventListener('submit', e=>{
    e.preventDefault();
    // const liTag = document.createElement('li');
    
    if(caseTodo){
        const liTag = document.createElement('li');
        liTag.textContent = `${caseTodo.value}`
        liTag.classList.add('remove');
        liTag.classList.add(`changeText`, `current-number-${elNumber}`);
        whatElementsList.append(liTag);
    }
    if(whenTodo) {
        const liTag = document.createElement('li');
        liTag.textContent = `${whenTodo.value}`
        liTag.classList.add('remove');
        liTag.classList.add('changeDate', `current-number-${elNumber}`);
        whenList.append(liTag);
    }
    if(whereTodo){
        const liTag = document.createElement('li');
        liTag.textContent = `${whereTodo.value}`;
        liTag.classList.add('remove');
        liTag.classList.add(`changeText`, `current-number-${elNumber}`);
        whereList.append(liTag);

    }

// CREATE OBJECT AND PLACE IT TO LOCAL STORAGE
    const todoObject = {
        what: `${caseTodo.value}`,
        when: `${whenTodo.value}`,
        where: `${whereTodo.value}`
    }
    localStorage.setItem(`${caseTodo.value}`, JSON.stringify(todoObject));

// CREATE TRUSH BUTTON + CHECKBOX

    //Create div - container fo: checkbox + trash button and added to DOM
    const div = document.createElement('div');
    div.classList.add('checkbox-button-container', `current-number-${elNumber}`);
    checkedList.append(div);

    //Create checkbox and added to DOM
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.classList.add('checkbox', `current-number-${elNumber}`);
    document.querySelector('.checkbox-button-container:last-child').append(checkbox);

    //Create trash button and added to DOM
    const trashButton = document.createElement('button');
    const trashIcon = document.createElement('span');
    trashIcon.classList.add('material-icons', `current-number-${elNumber}`);
    trashIcon.textContent = 'delete_forever';
    trashButton.setAttribute('type', 'submit');
    trashButton.classList.add('trash', `current-number-${elNumber}`);
    document.querySelector('.checkbox-button-container:last-child').append(trashButton);
    document.querySelector('.checkbox-button-container:last-child>button').append(trashIcon)


//IF CHECKBOX CHECKED REMOVE ELEMENT
    const removeElements = document.querySelectorAll('.remove');
    if(!e.target.checked){
        
        removeElements.forEach(e=>{
            e.classList.remove('remove');
        });
    }
    
    checkbox.addEventListener('click', e=>{
        if(e.target.checked){
            removeElements.forEach(e=>{
                e.classList.add('remove');
            });
        } else {
            removeElements.forEach(e=>{
                e.classList.remove('remove');
            });
        }
        
    });
form.reset()
elNumber++
});

// TRASH BUTTON LISTENER - REMOVE ELEMENTS (from Todo list and from localStorage):
const trashButtonContainer = document.querySelector('.checkedlist');

trashButtonContainer.addEventListener('click', e=>{
    //show information about risk of delete elemet
    if(e.target.tagName === 'SPAN' && e.target.className.includes('current-number') || e.target.tagName === 'BUTTON' && e.target.className.includes('current-number')){
        const deleteInfo = document.querySelector('.delete-information');
        deleteInfo.classList.add('delete-information-position');
        deleteInfo.style.top = `${e.clientY}px`;
        deleteInfo.style.left = `${e.clientX}px`;

        console.log(e)
        let className = e.target.classList;
        

        deleteInfo.addEventListener('click', e=>{
            if(e.target.className === `yes-button`){
                
                className.forEach((e, index)=>{
                    console.log(e);
                    if(index === 1){
                        console.log(e);
                        const sameClassName = document.querySelectorAll(`.${e}`);

                        sameClassName.forEach((e, index)=>{
                            e.remove();
                            
                            if(index === 0){
                                localStorage.removeItem(`${e.textContent}`); // <<-- remove associated object from localStorage
                            }
                            deleteInfo.classList.remove('delete-information-position'); 
                        })
                    }
                })     
            } 
            else {
                deleteInfo.classList.remove('delete-information-position');
            }
            className = [];
        });

    }
});

// CLICK AND CHANGE TEKST:
const casesContainer = document.querySelector('.cases');
casesContainer.addEventListener('click', e=>{
    // console.log(e)

    
    // if changeText-class element exist and if input-class element does not exist === then create new input-tag
    if(e.target.className.includes("changeText") && !document.querySelector('.input')){
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'text')
        newInput.setAttribute('value', `${e.target.textContent}`)
        newInput.classList.add('input');
        e.target.textContent = ``;
        e.target.prepend(newInput);
        newInput.focus();

        //MULTIPLE EVENTLISTENER FOR TEXT CONTENT
        // THERE IS AN ERROR WHEN BLUR AND CHANGE EVENTLISTENER EXIST TOGETHER

        const changeContent = e=>{
            e.target.parentNode.textContent = `${e.target.value}`;
            e.stopPropagation();
        }
        document.querySelector('.input').addEventListener('blur', changeContent, false);
        document.querySelector('.input').addEventListener('change', changeContent, false);
    }

    // if click on date-place
    if(e.target.className.includes('changeDate') && !document.querySelector('.input')){
        //create new input tag with value
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'date')
        newInput.classList.add('input');
        newInput.setAttribute('value', `${e.target.textContent}`)
        e.target.textContent = ``;
        e.target.prepend(newInput);
        newInput.focus();

        //MULTIPLE EVENTLISTENER FOR FUNCTION FOR DATE CONTENT
        const changeContent = e=>{
            e.target.parentNode.textContent = `${e.target.value}`;
            e.stopPropagation();
        }
        document.querySelector('.input').addEventListener('blur', changeContent, false);
        document.querySelector('.input').addEventListener('change', changeContent, false);
    }


});

///////////////////////////////////////////////////////////////////////////////////////////
//MULTIPLE EVENTLISTENER FOR FUNCTION

// const changeContent = e=>{
//     e.target.parentNode.textContent = `${e.target.value}`;
//     e.stopPropagation();
// }
// document.querySeletext-containerctor('.input').addEventListener('blur', changeContent, false);
// document.querySelector('.input').addEventListener('change', changeContent, false);
//////////////////////////////////////////////////////////////////////////////////////////


// // CLICK AND CHANGE TEKST:
// const casesContainer = document.querySelector('.cases');
// casesContainer.addEventListener('click', e=>{
//     // console.log(e)
    
//     if(e.target.className === 'changeText'){
//         // const prompter = prompt('please do it');
//         // e.target.textContent = `${prompter}`
//         console.log(e.target.parentNode);
//         e.target.innerHTML = '<form><input type="text"></form>';

//         e.target.addEventListener('submit', e=>{
//             e.preventDefault();
//             console.log(e.target.parentNode);
//             e.target.innerHTML = `<li class="changeText">${e.target.firstChild.value}</li>`
//             e.stopPropagation();
//         });
//     }
//     if(e.target.className === 'changeDate'){
//         e.target.innerHTML = '<form><input type="date"></form>';

//         e.target.addEventListener('change', e=>{

//             console.log(e.target.parentNode);
//             e.target.parentNode.innerHTML = `<li class="changeDate">${e.target.value}</li>`;
//             e.stopPropagation();
//         });
//     }


// hide text after click button

// const hideTextButton = document.querySelector('.hide-button');
// const textContainer = document.querySelector('.text-container-2');

// hideTextButton.addEventListener('click', e=>{

//     if(textContainer.className === 'text-container-2'){
//         textContainer.classList.remove('text-container-2');
//         textContainer.classList.add('text-container-1');
//     }else if(textContainer.className === 'text-container-1'){
//         textContainer.classList.remove('text-container-1');
//         textContainer.classList.toggle('text-container-2');
//     }
// });


const searchInput = document.querySelector('.search');
const listItems = document.querySelectorAll('li');

const serachList = (term)=>{
    console.log(Array.from(listItems).filter(li=>{
        return li.textContent.includes(term);
        }));
    
    
};

searchInput.addEventListener('keyup', ()=>{
    const term = search.value;
    serachList(term)
})