const a = 5;
const b = 2;
const myName = "nico"
const veryLongVariableName = 0;

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

function sayHello(nameOfPerson,age) {
  console.log("Hello my name is " + nameOfPerson + " and Im " + age)
}

sayHello('nico', 23);





function plus(a, b) {
  console.log(a +b);
}
plus(8, 60); // 68



const player = {
  name : 'nico',
  sayHello: function(otherPersonsName) {
    console.log('Hello ' + otherPersonsName + ' nice to meet you')
  }
};

console.log(player.name)
player.sayHello('lynn');  // Hello lynn nice to meet you




const isNicoFat = true;
isNicoFat = false;  // true로 불가능한게 const로 이미 true 정의했기때문 -> LET으로 정의해야 업데이트 가능!

// 항상 const를 사용하고 변경이 필요한 경우에만 let 사용


// null -> 비어있음 ,  undefined -> 정의되지 않음!

const me = "sexy"
const days = [1, 2, false, true, null, undefined, 'text', me];






a + b
a - b
a / b
a ** b


const calculator = {
  add: function(a, b){
    console.log(a + b);
  },
  minus: function(a, b) {
    console.log(a - b);
  },

  divide: function(a, b) {
    console.log(a / b);
  },

  square: function(a, b) {
    console.log(a ** b);
  }
};

calculator.add(1, 2);
calculator.minus(3, 1);
calculator.divide(10, 2);
calculator.square(2, 4);


// conditional
const age = parseInt(prompt('How old are you'));
console.log(age);


// isNaN()  -> number인지 아닌지 확인 가능 boolean으로 반환함
console.log(isNaN(age));  // false -> age가 number라는 뜻!


// if() {
//   // condition === true
// } else {
//   // condition === false
// }

const age2 = parseInt(prompt('How old are you'));
if(isNaN(age2)) {
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age");
};

const age3 = parseInt(prompt('How old are you'));
if (isNaN(age3) || age3 < 0) {
  console.log("Please write a real positive number");
} else if(age3 < 18) {
  console.log("You are too young");
} else if(age3 >= 18 && age3 <= 50) {
  console.log("You can drink");
} else if(age3 > 50 && age3 <= 80) {
  console.log("You shoud exercise");
} else if(age3 === 100) {
  console.log("Wow you are wise");
} else if(age3 > 80) {
  console.log("You can do whatever you want");
};


const h1 = document.getElementById('title');

h1.innerText = "click me";


h1.style.color = 'red';

function handleTitleClick() {
  console.log("title was clicked!");
}

function handleMouseEnter() {
  h1.innerText = 'mouse is here!';
}

function handleMouseLeave() {
  h1.innerText = 'Mouse is gone';
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}


function handleWindowCopy() {
  alert("copier!~")
}

function handleWindowOffline() {
  alert("SOS no wifi")
}

function handleWindowOnline() {
  alert("ALL GOOOOD")
}

// title.addEventListener("click",handleTitleClick);
h1.onclick = handleTitleClick;
h1.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);


window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy',handleWindowCopy);
window.addEventListener('offline',handleWindowOffline);
window.addEventListener('online',handleWindowOnline);




const h1 = document.getElementById('title')

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "tomato") {
    newColor = "black";
  } else {
    newColor = "tomato";
  }
  h1.style.color = newColor;
}

h1.addEventListener('click', handleTitleClick);




// const h1 = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//   const clickedClass = "clicked"
//   if(h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

h1.addEventListener('click', handleTitleClick);



const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  const clickedClass = "clicked"
  // 위 코드처럼 .add / .remove를 자동으로 해주는 것 -> toggle
  h1.classList.toggle(clickedClass);
}

h1.addEventListener('click', handleTitleClick);