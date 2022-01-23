
const API_KEY = "7be561d007b97bb258cf78436d6cc8f9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("you live it: ",lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
    //console.log(url);
    fetch(url).then(response => response.json().then(data => {
        console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;     // 지역이름 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;   // 날씨 상태

    }) );     // javascript 에서 url을 호출
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);