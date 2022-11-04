const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minuets = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0"); 
  clock.innerText = `${hours}:${minuets}:${seconds}`;
}

getClock();  // getClock()을 실행해주는 이유 -> 처음 오픈 시 1초 뒤에 시간이 나오기때문에
setInterval(getClock, 1000);








// padStart(몇 글자, 앞에 채울숫자)  
// "1".padStart(2,"0")  // "01"
// "hello".padStart(20, "x")  // xxxxxxxxxxxxxxxhello

// padEnd(몇 글자, 뒤에 채울숫자)
// "1".padEnd(3, "0")  // "100"


// setTimeout 개념 ->
// function sayHello() {
//   console.log("hello");
// }

// setTimeout(function, 간격(ms)) -> 해당 간격 뒤에 함수 실행!
// setTimeout(sayHello, 5000) // 5초 뒤에 sayHello 함수를 실행해!


// setInterval 개념 -> 매초마다 반복!
// function sayHello() {
//   console.log("hello");
// }

// setInterval(function, 간격(ms)) -> 매초마다 함수 반복!
// setInterval(sayHello, 5000);  // 5초마다 sayHello 함수를 실행해!