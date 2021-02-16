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

/*******************************************/

const gbFiles = document.querySelectorAll('.files-weight h4');
const storageUsage = document.querySelector('.storage-usage h3');
const inCircleNum = document.querySelector('.circle h3');
const buttonPercent = document.querySelector('.button-percent');

// inCircleNum.textContent = `${''} %`
// console.log(gbFiles);

buttonPercent.addEventListener('click', () =>{

    inCircleNum.textContent = `${''}`
    gbFiles.forEach( e =>{
        let number = e.textContent.match(/(\d+)/)[0];
        let valNum = parseFloat(number);
        inCircleNum.textContent += `${valNum}+`;

    });
    const inCircleNumSum = document.querySelector('.circle h3');
    let sumAll = inCircleNumSum.textContent + '0'
    let valNum = eval(sumAll);
    inCircleNum.textContent = `${Math.round(valNum/1285*100)}%`
    
});




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

