const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();    // 날짜와 시간이 담긴 오브젝트

    //padStart 는 문자열 패딩하는 것으로 (자리수, "부족한 자리수를 채울 문자")의 파라미터를 갖는다
    // padStart 는 앞에서 부터 채우고 padEnd 는 뒤에서 부터 채운다.
    const hours = String(date.getHours()).padStart(2,"0");      //2자릿수로 표현하되 부족한 부분은 '0'으로 표시
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);