const divPost = document.createElement('div');
const counter = document.querySelector('.counter-text');

// create array of 1-20 unique numbers

let emptyArray = [];

for(let i=0; i<1000; i++){
    let newNumber = Math.floor(Math.random()*20)+1;
    if(emptyArray.indexOf(newNumber) === -1){
    emptyArray.push(newNumber);
    }
    if(emptyArray.length === 20){
        break;
    }
}

// create new array with objects inside. Add to objects unique number-key value from emptyArray

const newArrayObject = emptyArray.map(function(number){
    let newObject = {number:`${number}`, img:``}
    return newObject
});

// path to img added to objects of array
const animalImages = ['./images/bear.jpg', './images/coala.jpg','./images/crocodile.jpg','./images/elephant.jpg','./images/giraffe.jpg','./images/kangaroo.jpg','./images/lion.jpg','./images/monkey.jpg','./images/tiger.jpg','./images/zebra.jpg','./images/bear.jpg', './images/coala.jpg','./images/crocodile.jpg','./images/elephant.jpg','./images/giraffe.jpg','./images/kangaroo.jpg','./images/lion.jpg','./images/monkey.jpg','./images/tiger.jpg','./images/zebra.jpg',]

const carsArray = ['./cars/audi.jpeg', './cars/bmw.jpg', './cars/cadilac.jpg', './cars/chevrolet.jpg', './cars/ford.jpg', './cars/gmc.jpg', './cars/golf.jpg', './cars/mini.jpg', './cars/mustang.jpg', './cars/toyota.jpg', './cars/audi.jpeg', './cars/bmw.jpg', './cars/cadilac.jpg', './cars/chevrolet.jpg', './cars/ford.jpg', './cars/gmc.jpg', './cars/golf.jpg', './cars/mini.jpg', './cars/mustang.jpg', './cars/toyota.jpg'];


// const formulage = document.querySelector('form');
// let testo = 0;

// formulage.addEventListener('click', e=>{
//     console.log(e.target.id);
//     if(e.target.id === `animals`){
//         console.log(`ANIMALS`);
//         test = `animals`
//     }
//     if(e.target.id === `cars`){

//         console.log(`CARS`);
//         const readyObject = carsArray.map(function(img,index){
//             let newObject = {number:`${newArrayObject[index].number}`, img:`${img}`}
//             return newObject
//         });

//         const divContainer = document.querySelector('.game-container')
//         const dviElements = document.querySelectorAll('.element');
//         dviElements.forEach(div=>{
//             div.removeChild(div.childNodes[0]);
//         })


//         dviElements.forEach(function(div){
//         readyObject.forEach(function(object){
//             if(object.number === `${parseInt(div.className)}`){
//             const newImg = document.createElement('img');
//             newImg.src = `${object.img}`;
//             newImg.style.opacity = '0';
//             div.append(newImg);
//                 }
//             })
//         });
//     }
// })

const readyObject = animalImages.map(function(img,index){
    let newObject = {number:`${newArrayObject[index].number}`, img:`${img}`}
    return newObject
});
console.log(readyObject);

// add ready div element with imgs to div container
const divContainer = document.querySelector('.game-container')
const dviElements = document.querySelectorAll('.element');


dviElements.forEach(function(div){
    readyObject.forEach(function(object){
        if(object.number === `${parseInt(div.className)}`){
            const newImg = document.createElement('img');
            newImg.src = `${object.img}`;
            div.append(newImg);
        }
    })
});

// hide all images using opacity-property
const imgs = document.querySelectorAll('img');
const arrayOfImgs = Array.from(imgs); // the main array for pictures-game
console.log(arrayOfImgs)
arrayOfImgs.forEach(function(img){
    img.style.opacity = '0'
});


let counterValue = 0;
//FUNCTION: when clicked show image / when clicked two images hide after 1 second
const showHideImg = function (img){
    img.target.style.opacity = '1';
    //newA = array of clicked and appeard images
    let newA = arrayOfImgs.filter(img=>{
        return img.style.opacity === `1`;
    });

    // add animation to image when clicked
    const divElement = document.createElement('div');
    divElement.style.zIndex = '0';
    divElement.classList.add('frame');
    console.log(divElement);

    img.target.before(divElement);
    img.target.classList.add(`bounce`);
    setTimeout(()=>{
        img.target.classList.remove(`bounce`);
        divElement.remove();
    },1000)
    //////////////////////////////////////

   console.log(newA);

    if(newA.length === 2){
        const newAElement1 = newA[0].src;
        const newAElement2 = newA[1].src;
        counterValue += 1;
        counter.textContent = `${counterValue}`

        arrayOfImgs.forEach(img=>{ // prevent showing more than two images by removeListener
            img.removeEventListener('click', showHideImg) 
        })

        setTimeout(function(){
            let indexesToRemove = [];

            if(newAElement1 != newAElement2){ // if images are different hide them
                newA.forEach(img=>{
                img.style.opacity = `0`;
            })} else if (newAElement1 === newAElement2){ // if images are same then stay them visible
                arrayOfImgs.forEach((img, index)=>{
                    if(img.src === newAElement1){
                        indexesToRemove.push(index);
                    }
                })
                console.log(indexesToRemove)
                indexesToRemove.forEach(index=>{ // remove img-element from main array named arrayOfImgs
                    arrayOfImgs.splice(index,1, divPost);
                })
            }
            arrayOfImgs.forEach(img=>{
                img.addEventListener('click', showHideImg) // return a showing-images possibility for all pictures from main array named arrayOfImgs
            })

            if(arrayOfImgs.every(element=> element.tagName === 'DIV')){
                alert(`YOU WIN - your score is: ${counter.textContent}`)
            }
        }, 1300)
    }
    

}

// add listener to each img-tag from main array
arrayOfImgs.forEach(img=>{
    img.addEventListener('click', showHideImg) 
})
