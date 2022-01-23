const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

// 유저 정보가 들어오면 나타낼 텍스트
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username"     //storage Key 값

// event 함수 agument 명은 기본적으로 event로 사용한다.
function onLoginsubmit(event) {
    event.preventDefault();     // 어떤 event던지 브라우저의 기본행동이 발생하지 않게 막는 함수   
                                // submit 이벤트로 인해 일어나는 새로고침 기능이 발생하지 않게 막음
                                     
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    console.log(event); 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);  //localStorage에 username 저장(작은 DB 라고 생각)  
    paintGreetings();

}
/*function onLinkClick(event) {           // 링크 이벤트(아직 아무것도 안함)
    event.preventDefault();
    console.log(event);
    //alert("Clicked");
}*/

function paintGreetings() {
    //username_key 값 가져오기 
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hi ${username}`;      // user 정보를 입력
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASS_NAME); // username이 없을시 form 표시
    loginForm.addEventListener("submit", onLoginsubmit);     //submit 이벤트
}else {
    //show the username
    //유저 정보 나타내기
   paintGreetings();
    
}

//link.addEventListener("click", onLinkClick);   

