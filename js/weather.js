const city = document.querySelector("#weather-box span:first-child");
const weather = document.querySelector("#weather-box span:last-child");

const API_KEY = "8500fe23fc65036167057cb033cd6165";

function onGeoOk(position){
    // 날씨, 위치 정보 받아오기
    const lat = position.coords.latitude;
    const lon = position.coords.longityde;

    // const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang={lang}`
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.598&lon=126.9783&appid=8500fe23fc65036167057cb033cd6165&lang={lang}`
    
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
    city.innerText = "Your city";
    weather.innerText = "The weather there is probably nice";
}

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);