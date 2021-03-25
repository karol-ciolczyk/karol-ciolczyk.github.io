// const aButton = document.querySelectorAll('.files-manage a');

// Array.from(aButton).forEach(function(a){
//     a.addEventListener('click', function(b){
        
//         const alink = b.target.parentElement;
//         alink.parentNode.removeChild(alink)

//     });

// });

// const navButton = document.querySelectorAll('.nav-buttons a');

// Array.from(navButton).forEach(function(a){

//     a.addEventListener('click', function(b){
//         const par = b.target.parentElement;
//         par.parentNode.removeChild(par);

//     });
// });

// const firstW = document.querySelector('#top-windows');

// firstW.addEventListener('click', function(a){
//     if(a.target.cloneNode(true)){
//         const aag = a.target.cloneNode(true);
//         firstW.removeChild(aag)
//     }
// });


/********************************************************/


const button = document.querySelector('.create-new-button');

//button.addEventListener('click', () => {
//     console.log('you clicked me. I am btton');
// });

const ul = document.querySelector('.files-manage>ul');

button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'nice new li tag item'
    // ul.prepend(li);
    ul.append(li);
});


const items = document.querySelectorAll('.nav-buttons li');

console.log(items);

items.forEach(item => {
    item.addEventListener('click', e => {
        console.log(e.target);
        e.target.style.textDecoration = 'line-through'
    });
});

/******************************************************/

const navBar = document.querySelector('#left-nav-bar');

console.log(navBar);

navBar.addEventListener('click', e => {
    // console.log(e.target);
    if(e.target.tagName === 'A' || e.target.tagName === 'LI'){
        e.target.remove();
    }
}); 

const logoTXT = document.querySelector('.logo>h1')

navBar.addEventListener('mousemove', e => {
    console.log(e.offsetX, e.offsetY);
    logoTXT.textContent = `x= ${e.offsetX} y= ${e.offsetY}`;
});

/**********************************************************************/


const button2 = document.querySelector('.upgrade-account');
const background = document.querySelector('.promotion');
const close = document.querySelector('.x');

button2.addEventListener('click', () =>{
    background.style.display = 'block';
});

close.addEventListener('click', () =>{
    background.style.display = 'none';
});

background.addEventListener('click', () =>{
    background.style.display = 'none';
});

/********************BUTTON ALL FILES %***********************/

const gbFiles = document.querySelectorAll('.files-weight h4');
const storageUsage = document.querySelector('.storage-usage h3');
const inCircleNum = document.querySelector('.circle h3');
const buttonPercent = document.querySelector('.button-percent');

// inCircleNum.textContent = `${''} %`
// console.log(gbFiles);

buttonPercent.addEventListener('click', () =>{

    let score = 0;

    inCircleNum.textContent = `${''}`
    gbFiles.forEach( (e, index) =>{
        let number = e.textContent.match(/(\d+)/)[0];
        let valNum = parseFloat(number);
        inCircleNum.textContent += `${valNum}+`;
        score += valNum

        
    });

    console.log(score);
    const inCircleNumSum = document.querySelector('.circle h3');
    let sumAll = inCircleNumSum.textContent + '0'
    let valNum = eval(sumAll);

    let output = 0;
    const timer = setInterval(()=>{
        inCircleNum.textContent = `${Math.round(output/1285*100)}%`
        if(output === Math.round(valNum)){
            clearInterval(timer)
        } else{
            output++;
        }
    }, 1);
    
});

/********************BUTTON ALL FILES % - soluction 2 ***********************/


gbFiles.forEach( (e) =>{
    e.addEventListener('click', (el) =>{
        // console.log(el.target.textContent);
        storageUsage.textContent = `${el.target.textContent} of 1285 GB used`;
        
    });
    // storagaUsage.textContent = `${}`
});


gbFiles.forEach((e) =>{
    e.addEventListener('click', (el) =>{

        let number = el.target.textContent.match(/(\d+)/)[0];
        let pointNum = parseFloat(number);
        // console.log(pointNum);
        let x = pointNum;

        inCircleNum.textContent = `${Math.round(x/1285*100)}%`

        
    });
    // storagaUsage.textContent = `${}`
});


/*******************************************/

const buttonDDL = document.querySelector('.button-ddl');
const icon = document.querySelector('.button-ddl span');


buttonDDL.addEventListener('mouseover', (e) =>{
    console.log(e);
        icon.textContent = 'expand_more';
});

buttonDDL.addEventListener('mouseout', (e) =>{
    console.log(e);
        icon.textContent = 'expand_less';
});



// const percentage = function(x){
//     // console.log(x/1000*100)
//     return x = (x/1000)*100;
// }

// let x = percentage(55);
// console.log(x)


// console.log(percent);

// gbFiles.forEach( e =>{
//     let number = e.textContent.match(/(\d+)/)[0];
//     pointNum = parseFloat(number)
//     console.log(pointNum);
// });

console.log(buttonDDL.style);

const mcmP = document.querySelector('.mcm>div p');
const mcmDiv = document.querySelectorAll('.middle-color-menu div');
   
console.log(mcmP.textContent.includes('travel'));
console.log(mcmDiv);

console.log(mcmP.children);
console.log(mcmP.parentElement);
console.log(mcmP.parentElement.parentElement);
console.log(mcmP.parentElement.nextElementSibling);
console.log(mcmP.parentElement.nextElementSibling.previousElementSibling);

mcmDiv.forEach(item =>{
    item.addEventListener('click', e =>{
        if(e.target.tagName === 'DIV'){
            e.target.remove();
        }
        
    });
});


const myForm = document.querySelector('.form');
const usernamePattern = /^[a-zA-z]{6,8}$/
const changeBackgr = document.querySelector('.form [type="text"]');
// const username = document.querySelector('#user-name')sa

myForm.addEventListener('submit', e =>{
    e.preventDefault();
    // console.log(username.value);
    console.log(myForm.username.value);

    const username = myForm.username.value;
    

    if(usernamePattern.test(username)){
        console.log('it is veeeeery good')
    } else{
        console.log('it is veeeerrrrry baaaaaaad')
    }
});

myForm.addEventListener('keyup', e =>{
    console.log(e.target.value, myForm.username.value);

    if(usernamePattern.test(myForm.username.value)){
        console.log('its gooooooooood')
        // changeBackgr.classList.remove('baad');
        // changeBackgr.classList.add('good');
        changeBackgr.setAttribute('class', 'good');
        
    } else {
        console.log('its baaaaaaaaaadddddddd')
        // changeBackgr.classList.remove('good');
        // changeBackgr.classList.add('baad');
        changeBackgr.setAttribute('class', 'baad');
    }
});

/********************FORM-RADIO***********************/

const correctAnswers = ['A', 'A', 'A', 'A']
const formRadio = document.querySelector('.form-radio')

formRadio.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    let userAnswer = [formRadio.q1.value, formRadio.q2.value, formRadio.q3.value, formRadio.q4.value]

    userAnswer.forEach((answer, index) =>{
        console.log(answer, index);
        if(answer === correctAnswers[index]){
            score += 33;
        }
    });

    let sc = 0;
    let effect = setInterval(()=>{
        document.querySelector('.score-value span').style.fontSize = '40px'
        document.querySelector('.score-value span').textContent = `${sc}`;
        if(sc === score){
            clearInterval(effect);
        } else{
            sc++
        }
    },10);
});


/****************************** ARRAY METHODS ****************************/



// FILTER METHOD
const scores = [40, 50, 10, 10, 45, 25, 30, 88, 24, 5, 54, 8, 12];

const userLevel = [
    {username: 'stefan', vip: true},
    {username: 'wacek', vip: true},
    {username: 'mustafa', vip: false},
    {username: 'mietek', vip: true},
    {username: 'bożek', vip: false},
    {username: 'stasiek', vip: false},
    {username: 'kajtek', vip: false},
]

let scoreFiltered = userLevel.filter((user)=>{
    return user.vip
});

console.log(scoreFiltered);

// MAP METHOD

const vegePrice = [
    {name: 'carrot', price: 30},
    {name: 'cucumber', price: 20},
    {name: 'potato', price: 14},
    {name: 'tomato', price: 8},
    {name: 'onion', price: 4},
    {name: 'banana', price: 19},
    {name: 'grape', price: 28},
    {name: 'blackberry', price: 24},
    {name: 'pistacio', price: 41},
    {name: 'berry', price: 35},
    {name: 'apple', price: 16},
];

let saleVege = vegePrice.map((product)=>{
    if(product.price > 20) {
        return { name: product.name, price: product.price / 2}
    } else {
       return product;
    }
});

console.log(saleVege);
console.log(vegePrice);