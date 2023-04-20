const timeArea = document.querySelector('#time-now');

function timeSet(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    timeArea.innerText = `${hours}:${minutes}`;
}

timeSet();
setInterval(timeSet, 1000);