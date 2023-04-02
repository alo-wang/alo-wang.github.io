function onGeoOk(position){
    // 날씨, 위치 정보 받아오기
    const lat = position.coords.latitude;
    const lng = position.coords.longityde;
    console.log(lat, lng);
}

function onGeoError(){

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);