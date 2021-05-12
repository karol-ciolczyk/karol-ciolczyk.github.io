const body = document.querySelector('body');
const figure = document.querySelector('.tank');

// settings:
let keysSpecification = {
  moveLeft: '37',
  moveUp: '38',
  moveRight: '39',
  moveDown: '40',
  shoot: '32',
};
let tankSpeed = {speed: 1}

// which key
const left = keysSpecification.moveLeft;
const up = keysSpecification.moveUp;
const right = keysSpecification.moveRight;
const down = keysSpecification.moveDown;

let keysPressed = {};

let moveVertical = 0;
let moveHorizontal = 0;

let intervalId_0 = 0;
let intervalId_1 = 0;
let intervalId_2 = 0;
let intervalId_3 = 0;
let intervalId_4 = 0;
let intervalId_5 = 0;
let intervalId_6 = 0;
let intervalId_7 = 0;

let howManyClicked = 0;


////////////////////////////////////////////////////////////////////////// vehicle stering //
body.addEventListener('keydown', (event) => {
  keysPressed[event.keyCode] = true;
  // console.log(keysPressed, 'keyCode is:', event.keyCode);

  // tanks speed
  let speed = tankSpeed.speed;


  // this needed to one-key movement as second condition to the code
  const isClicked = [keysPressed[left], keysPressed[up], keysPressed[right], keysPressed[down]];
  howManyClicked = isClicked.filter(boolean => {
    return boolean === true;
  }).length;
  ///////////////////////////////////////////////////////////////////////////////////////////////

  if (event.keyCode === 32) {
    delete keysPressed['32'];
  } else if (event.keyCode === 88) {
    delete keysPressed['88'];
  } else if (event.keyCode === 90) {
    delete keysPressed['90'];
  }

  // console.log(keysPressed, 'keyup:', event.keyCode);

  if (keysPressed[right] === true && keysPressed[down] === true && intervalId_0 < 27) {
    const setInt0 = setInterval(() => {
      console.log(`here`)

      moveVertical += speed;
      figure.style.top = '';
      figure.style.top += `${moveVertical}px`
      moveHorizontal += speed;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_0 = setInt0;
  } else if (keysPressed[right] === false || keysPressed[down] === false) {
    clearInterval(intervalId_0);
    intervalId_0 = 0;
  }
  if (keysPressed[left] === true && keysPressed[up] === true && intervalId_1 < 27) {
    const setInt1 = setInterval(() => {
      moveVertical -= speed;
      figure.style.top = '';
      figure.style.top += `${moveVertical}px`
      moveHorizontal -= speed;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_1 = setInt1;
  } else if (keysPressed[left] === false || keysPressed[up] === false) {
    clearInterval(intervalId_1);
    intervalId_1 = 0;
  }
  if (keysPressed[up] === true && keysPressed[right] === true && intervalId_2 < 27) {
    const setInt2 = setInterval(() => {
      moveVertical -= speed;
      figure.style.top = '';
      figure.style.top += `${moveVertical}px`
      moveHorizontal += speed;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_2 = setInt2;
  } else if (keysPressed[up] === false || keysPressed[right] === false) {
    clearInterval(intervalId_2);
    intervalId_2 = 0;
  }
  if (keysPressed[left] === true && keysPressed[down] === true && intervalId_3 < 27) {
    const setInt3 = setInterval(() => {
      moveVertical += speed;
      figure.style.top = '';
      figure.style.top += `${moveVertical}px`
      moveHorizontal -= speed;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_3 = setInt3;
  } else if (keysPressed[left] === false || keysPressed[down] === false) {
    clearInterval(intervalId_3);
    intervalId_3 = 0;
  }
  if (keysPressed[down] && howManyClicked === 1 && intervalId_4 < 27) {
    const setInt4 = setInterval(function () {
      moveVertical += speed;
      figure.style.top = '';
      figure.style.top += `${moveVertical}px`
    }, 10)
    intervalId_4 = setInt4;
  } else if (howManyClicked > 1) {
    clearInterval(intervalId_4);
  }
  if (keysPressed[up] && howManyClicked === 1 && intervalId_5 < 27) {
    const setInt5 = setInterval(function () {
      moveVertical -= speed;
      figure.style.top = '';
      figure.style.top += `${moveVertical}px`
    }, 10)
    intervalId_5 = setInt5;
  } else if (howManyClicked > 1) {
    clearInterval(intervalId_5);
  }
  if (keysPressed[right] && howManyClicked === 1 && intervalId_6 < 27) {
    const setInt6 = setInterval(function () {
      moveHorizontal += speed;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_6 = setInt6;
  } else if (howManyClicked > 1) {
    clearInterval(intervalId_6);
  }
  if (keysPressed[left] && howManyClicked === 1 && intervalId_7 < 27) {
    const setInt7 = setInterval(function () {
      moveHorizontal -= speed;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    intervalId_7 = setInt7;
  } else if (howManyClicked > 1) {
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
  // console.log(counter)\
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
    console.log(div, container)

    setTimeout(function () {
      div.remove();
      container.remove();
    }, 700)
    positionTop = 0;
    positionLeft = 0;
  }
  // granade
  if(event.keyCode === 67){
    console.log(`ssss`)
    positionTop = figure.offsetTop - 5;
    positionLeft = figure.offsetLeft - 5;
    const container = document.createElement('div');
    const div = document.createElement('div');
    container.style.transform = `rotateZ(${counter}deg) translateX(50px)`;
    container.style.top = `${positionTop}px`;
    container.style.left = `${positionLeft}px`;
    container.classList.add('cont-2');
    div.classList.add('granade');
    container.append(div);
    body.append(container);

    setTimeout(function () {
      div.remove();
      container.remove();
    }, 1000)
    positionTop = 0;
    positionLeft = 0;
  }
})


body.addEventListener('keyup', event => {
  keysPressed[event.keyCode] = false;
  console.log(keysPressed, 'keyup:', event.keyCode)

  // tanks speed
  let speed = tankSpeed.speed;

  // this needed to one-key movement as second condition to the code
  const isClicked = [keysPressed[left], keysPressed[up], keysPressed[right], keysPressed[down]];
  howManyClicked = isClicked.filter(boolean => {
    return boolean === true;
  }).length;
  ///////////////////////////////////////////////////////////////////////////////////////////////

  // stop move:
  if (event.keyCode == right || event.keyCode == down) {
    clearInterval(intervalId_0);
    intervalId_0 = 0;
  }
  if (event.keyCode == left || event.keyCode == up) {
    clearInterval(intervalId_1);
    intervalId_1 = 0;
  }
  if (event.keyCode == up || event.keyCode == right) {
    clearInterval(intervalId_2);
    intervalId_2 = 0;
  }
  if (event.keyCode == left || event.keyCode == down) {
    clearInterval(intervalId_3);
    intervalId_3 = 0;
  }
  if (event.keyCode == down) {
    clearInterval(intervalId_4);
    intervalId_4 = 0;
  }
  if (event.keyCode == up) {
    clearInterval(intervalId_5);
    intervalId_5 = 0;
  }
  if (event.keyCode == right) {
    clearInterval(intervalId_6);
    intervalId_6 = 0;
  }
  if (event.keyCode == left) {
    clearInterval(intervalId_7);
    intervalId_7 = 0;
  }

  // motion still works when one of keys will be unclicked - (when erlier was diagonal movement - 2 keys was clicked)
  console.log(howManyClicked)

  clearInterval(intervalId_4); // for down movement
  if (keysPressed[down] === true && howManyClicked === 1) {
    const setInt4 = setInterval(function () {
      moveVertical += speed;
      figure.style.top = '';
      figure.style.top += `${moveVertical}px`
    }, 10)
    intervalId_4 = setInt4;
  } else if (howManyClicked > 1) {
    clearInterval(intervalId_4);
    intervalId_4 = 0;
  }

  clearInterval(intervalId_5); // for up movement
  if (keysPressed[up] && howManyClicked === 1) {
    const setInt5 = setInterval(function () {
      moveVertical -= speed;
      figure.style.top = '';
      figure.style.top += `${moveVertical}px`
    }, 10)
    console.log(setInt5)
    intervalId_5 = setInt5;
  } else if (howManyClicked > 1) {
    clearInterval(intervalId_5);
    intervalId_5 = 0;
  }

  clearInterval(intervalId_6); // for right movement
  if (keysPressed[right] && howManyClicked === 1) {
    const setInt6 = setInterval(function () {
      moveHorizontal += speed;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    console.log(setInt6)
    intervalId_6 = setInt6;
  } else if (howManyClicked > 1) {
    clearInterval(intervalId_6);
    intervalId_6 = 0;
  }

  clearInterval(intervalId_7); // for left movement
  if (keysPressed[left] && howManyClicked === 1) {
    const setInt7 = setInterval(function () {
      moveHorizontal -= speed;
      figure.style.left = '';
      figure.style.left += `${moveHorizontal}px`
    }, 10)
    console.log(setInt7)
    intervalId_7 = setInt7;
  } else if (howManyClicked > 1) {
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