const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a")
const greeting = document.querySelector("#greeting")
// loginInput을 다르게 정의함(loginForm을 이미 가져왔으니 loginForm을 이용하여 가져오기)
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");

// 로그인 버튼

// 문자열에서 오타가 날 경우 알려주지 않지만 변수명에 오타가 나면 알려주기에 변수명으로 통일시켜서 사용!
// string이 중복된다면 변수로 지정해서 사용할 것!
const USERNAME_KEY = "username"  
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저가 기본적으로 하는 행동을 막음 ex) 제출 클릭 시 새로고침
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;  // 사용자가 입력한 것을 username이라는 변수에 저장
  localStorage.setItem(USERNAME_KEY, username); // localStorage에 입력한 이름을 저장해!
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);


// greeting.classList.remove(HIDDEN_CLASSNAME) -> 두 번 사용하고 있으니 함수로 만들어줌!
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;  // 비어있는 <h1>에 문자를 추가!
  greeting.classList.remove(HIDDEN_CLASSNAME);  // Hidden 클래스를 제거해줘!
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  // 로그인폼을 보여줘
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // greeting ${username} 페이지를 보여줘, hidden 클래스를 지워야해
  paintGreetings();
}





// PreventDefault()  -> 브라우저가 기본적으로 하는 행동들을 막아준다!
// 함수()  -> ()안에 자리를 만들어주면 그 자리에 정보들을 제공해줌!

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
//   // alert("clicked!");   // alert로 다른 링크로 이동되는 것을 잠시 막아줌
// }
// link.addEventListener("click", handleLinkClick);