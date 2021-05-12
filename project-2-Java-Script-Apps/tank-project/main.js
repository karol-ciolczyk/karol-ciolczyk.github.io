const body = document.querySelector('body');
const figure = document.querySelector('.tank');

let moveVertival = 0;
let moveHorizontal = 0;
let keysPressed = {};
let intervalId_0 = 0;
let intervalId_1 = 0;
let intervalId_2 = 0;
let intervalId_3 = 0;
let intervalId_4 = 0;
let intervalId_5 = 0;
let intervalId_6 = 0;
let intervalId_7 = 0;


////////////////////////////////////////////////////////////////////////// vehicle stering //
body.addEventListener('keydown', (event) => {
  // console.log('keyCode is:', event.keyCode);
  keysPressed[event.keyCode] = true;

  if (event.keyCode === 32) {
    delete keysPressed['32'];
  } else if (event.keyCode === 88) {
    delete keysPressed['88'];
  } else if (event.keyCode === 90) {
    delete keysPressed['90'];
  }

  // console.log(keysPressed, 'keyup:', event.keyCode);

  if (keysPressed['39'] === true && keysPressed['40'] === true && intervalId_0 < 27) {
    const setInt0 = setInterval(() => {
      console.log(`here`)

      moveVertival += 2;
      figure.style.top = '';
      figure.style.top += `${moveVertival}px`
      moveHorizontal += 2;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_0 = setInt0;
  } else if (keysPressed['39'] === false || keysPressed['40'] === false) {
    clearInterval(intervalId_0);
    intervalId_0 = 0;
  }
  if (keysPressed['37'] === true && keysPressed['38'] === true && intervalId_1 < 27) {
    const setInt1 = setInterval(() => {
      moveVertival -= 2;
      figure.style.top = '';
      figure.style.top += `${moveVertival}px`
      moveHorizontal -= 2;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_1 = setInt1;
  } else if (keysPressed['37'] === false || keysPressed['38'] === false) {
    clearInterval(intervalId_1);
    intervalId_1 = 0;
  }
  if (keysPressed['38'] === true && keysPressed['39'] === true && intervalId_2 < 27) {
    const setInt2 = setInterval(() => {
      moveVertival -= 2;
      figure.style.top = '';
      figure.style.top += `${moveVertival}px`
      moveHorizontal += 2;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_2 = setInt2;
  } else if (keysPressed['38'] === false || keysPressed['39'] === false) {
    clearInterval(intervalId_2);
    intervalId_2 = 0;
  }
  if (keysPressed['37'] === true && keysPressed['40'] === true && intervalId_3 < 27) {
    const setInt3 = setInterval(() => {
      moveVertival += 2;
      figure.style.top = '';
      figure.style.top += `${moveVertival}px`
      moveHorizontal -= 2;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_3 = setInt3;
  } else if (keysPressed['37'] === false || keysPressed['40'] === false) {
    clearInterval(intervalId_3);
    intervalId_3 = 0;
  }
  if (keysPressed['40'] && Object.keys(keysPressed).length < 2 && intervalId_4 < 27) {
    const setInt4 = setInterval(function () {
      moveVertival += 2;
      figure.style.top = '';
      figure.style.top += `${moveVertival}px`
    }, 10)
    intervalId_4 = setInt4;
  } else if (Object.keys(keysPressed).length > 1) {
    clearInterval(intervalId_4);
  }
  if (keysPressed['38'] && Object.keys(keysPressed).length < 2 && intervalId_5 < 27) {
    const setInt5 = setInterval(function () {
      moveVertival -= 2;
      figure.style.top = '';
      figure.style.top += `${moveVertival}px`
    }, 10)
    intervalId_5 = setInt5;
  } else if (Object.keys(keysPressed).length > 1) {
    clearInterval(intervalId_5);
  }
  if (keysPressed['39'] && Object.keys(keysPressed).length < 2 && intervalId_6 < 27) {
    const setInt6 = setInterval(function () {
      moveHorizontal += 2;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_6 = setInt6;
  } else if (Object.keys(keysPressed).length > 1) {
    clearInterval(intervalId_6);
  }
  if (keysPressed['37'] && Object.keys(keysPressed).length < 2 && intervalId_7 < 27) {
    const setInt7 = setInterval(function () {
      moveHorizontal -= 2;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_7 = setInt7;
  } else if (Object.keys(keysPressed).length > 1) {
    clearInterval(intervalId_7);
  }
})



console.log(figure.offsetTop);
console.log(figure.offsetLeft);

let moveHorizon = figure.offsetTop;
let moveVert = figure.offsetLeft;


// platform + cannon rotate:

const platform = document.querySelector('.platform');
let counter = 0;

// body.addEventListener('keydown', event=>{
//     console.log(counter)

//     if (event.keyCode === 88 /*x*/ ) {
//         counter += 1;
//         // platform.style.transform = `rotateZ(${counter}deg)`;
//         platform.style.animationName = `round${counter}`
//     }
//     if(counter === 360){
//         counter = 0;
//     }
//     if (event.keyCode === 90 /*z*/) {
//         counter -= 1;
//         // platform.style.transform = `rotateZ(${counter}deg)`;
//         platform.style.animationName = `round${counter}`
//     }
// })
let positionTop = 0;
let positionLeft = 0;

let platformIntervalId_0 = 0;
let platformIntervalId_1 = 0;


body.addEventListener('keydown', event => {
  // console.log(counter)
  // console.log('hehehehrhr ', figure.offsetLeft, figure.offsetTop)
  if (event.keyCode === 88 /*x*/ && platformIntervalId_0 < 27) {
    const setInt0 = setInterval(function () {
      counter += 2;
      platform.style.transform = `rotateZ(${counter}deg)`;
    }, 10)
    platformIntervalId_0 = setInt0;
  }
  if (counter === 360) {
    counter = 0;
  }
  if (event.keyCode === 90 /*z*/ && platformIntervalId_1 < 27) {
    const setInt1 = setInterval(function () {
      counter -= 2;
      platform.style.transform = `rotateZ(${counter}deg)`;
    }, 10)
    platformIntervalId_1 = setInt1;
  }


  // bomb
  if (event.keyCode === 32) {
    positionTop = figure.offsetTop - 21;
    positionLeft = figure.offsetLeft - 21;
    const container = document.createElement('div');
    const div = document.createElement('div');
    container.style.transform = `rotateZ(${counter}deg) translateX(50px)`;
    container.style.top = `${positionTop}px`
    container.style.left = `${positionLeft}px`
    container.classList.add('cont');
    div.classList.add('bomb');
    container.append(div);
    body.append(container);

    setTimeout(function () {
      div.remove();
      container.remove();
    }, 2000)
    positionTop = 0;
    positionLeft = 0;
  }
})


body.addEventListener('keyup', event => {
  delete keysPressed[event.keyCode];
  console.log(keysPressed, 'keyup:', event.keyCode)

  // stop move:
  if (event.keyCode === 39 || event.keyCode === 40) {
    clearInterval(intervalId_0);
    intervalId_0 = 0;
  }
  if (event.keyCode === 37 || event.keyCode === 38) {
    clearInterval(intervalId_1);
    intervalId_1 = 0;
  }
  if (event.keyCode === 38 || event.keyCode === 39) {
    clearInterval(intervalId_2);
    intervalId_2 = 0;
  }
  if (event.keyCode === 37 || event.keyCode === 40) {
    clearInterval(intervalId_3);
    intervalId_3 = 0;
  }
  if (event.keyCode === 40) {
    clearInterval(intervalId_4);
    intervalId_4 = 0;
  }
  if (event.keyCode === 38) {
    clearInterval(intervalId_5);
    intervalId_5 = 0;
  }
  if (event.keyCode === 39) {
    clearInterval(intervalId_6);
    intervalId_6 = 0;
  }
  if (event.keyCode === 37) {
    clearInterval(intervalId_7);
    intervalId_7 = 0;
  }

  // motion still works when one of keys will be unclicked - (when erlier was diagonal movement - 2 keys was clicked)

  clearInterval(intervalId_4);      // for down movement
  if (keysPressed['40']) {
    const setInt4 = setInterval(function () {
      moveVertival += 2;
      figure.style.top = '';
      figure.style.top += `${moveVertival}px`
    }, 10)
    intervalId_4 = setInt4;
  } else if (Object.keys(keysPressed).length > 1) {
    clearInterval(intervalId_4);
    intervalId_4 = 0;
  }

  clearInterval(intervalId_5); // for up movement
  if (keysPressed['38']) {
    const setInt5 = setInterval(function () {
      moveVertival -= 2;
      figure.style.top = '';
      figure.style.top += `${moveVertival}px`
    }, 10)
    console.log(setInt5)
    intervalId_5 = setInt5;
  } else if (Object.keys(keysPressed).length > 1) {
    clearInterval(intervalId_5);
    intervalId_5= 0;
  }

  clearInterval(intervalId_6); // for right movement
  if (keysPressed['39']) {
    const setInt6 = setInterval(function () {
      moveHorizontal += 2;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    console.log(setInt6)
    intervalId_6 = setInt6;
  } else if (Object.keys(keysPressed).length > 1) {
    clearInterval(intervalId_6);
    intervalId_6 = 0;
  }

  clearInterval(intervalId_7); // for left movement
  if (keysPressed['37']) {
    const setInt7 = setInterval(function () {
      moveHorizontal -= 2;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    console.log(setInt7)
    intervalId_7 = setInt7;
  } else if (Object.keys(keysPressed).length > 1) {
    clearInterval(intervalId_7);
    intervalId_7 = 0;
  }




  // // stop platform rotate:
  if (event.keyCode === 88) {
    clearInterval(platformIntervalId_0);
    platformIntervalId_0 = 0;
  }
  if (event.keyCode === 90) {
    clearInterval(platformIntervalId_1);
    platformIntervalId_1 = 0;
  }
});












// Grab object solution 1
// const grabObject = function (event) {
//     console.log(event.movementX, event.movementY);
//     moveHorizon = event.clientX;
//     figure.style.left = '';
//     figure.style.left = `${moveHorizon}px`

//     moveVert = event.clientY;
//     figure.style.top = '';
//     figure.style.top = `${moveVert}px`
// }

// Grab object solution 2
// const grabObject = function (event) {
//     moveHorizon += event.movementX;
//     figure.style.left = '';
//     figure.style.left = `${moveHorizon}px`

//     moveVert += event.movementY;
//     figure.style.top = '';
//     figure.style.top = `${moveVert}px`
// }


// figure.addEventListener(`mousedown`, () => {
//     body.addEventListener('mousemove', grabObject)
// });

// figure.addEventListener(`mouseup`, () => {
//     body.removeEventListener('mousemove', grabObject)
// });