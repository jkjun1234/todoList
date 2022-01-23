const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];   //todo list 값 저장할 배열
const TODOS_KEY = "todolist"

function saveTodo() {
    console.log("saving Todo");
    // todos 배열을 String 으로 변환하여준다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));      //storage 저장
}

function deleteTodo(event) {
    const li = event.target.parentElement;      // 클릭된 button target 의 부모속성 확인(li)
    console.log("del li: ",li.id);
    li.remove();
    toDos = toDos.filter((todo) => {return todo.id !== parseInt(li.id);});
    saveTodo();     // 수정된 todo list 저장
    //localStorage.removeItem(TODOS_KEY,li.value);
}

// todo list html 태그 내용 추가
function paintTodo(newTodo) {
    //console.log("paint : ",newTodo);   
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;       // todo li 내용 넣기
    const todoRemoveBtn = document.createElement("button");

    li.appendChild(span);           // todo li 추가
    li.appendChild(todoRemoveBtn);  // todo li 삭제버튼 추가
    todoRemoveBtn.innerText = "remove";
    todoList.appendChild(li);       // todoList list <ul>에 넣기
    todoRemoveBtn.addEventListener("click", deleteTodo);  // removeBtn 핸들러 호출  
}

function handleToDoSubmit(event) {
    event.preventDefault();     // 새로고침 방지
    console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";       //todo 값을 넣고 input textbox는 비운다.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);        // todos 배열 저장
    //console.log(toDos);
    paintTodo(newTodoObj);
    saveTodo();         //todos를 storage에 저장
}

function savedToDoList (item) {     // 저장된 Todo list 를 읽어오는 함수
    console.log(item);
}

const savedToDos = localStorage.getItem(TODOS_KEY); //todolist 값 가져오기
//console.log(savedToDos);

// todolist 저장된 값 불러오기
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);  // toDos를 객체로 변환
    console.log("parsedToDos: ",parsedToDos);
    toDos = parsedToDos;    //객체를 업데이트 하는것이라서 toDos를 let 으로 선언.
    parsedToDos.forEach(paintTodo);
}   
todoForm.addEventListener("submit", handleToDoSubmit);
