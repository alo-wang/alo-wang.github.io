const body = document.querySelector("body");  
const btn = document.querySelector("#login-form button");
const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];


function setColor() {
const choseColor1 = colors[Math.floor(Math.random() * colors.length)];
const choseColor2 = colors[Math.floor(Math.random() * colors.length)];

  if(choseColor1 == choseColor2){
    body.style.background = `url('./img/random-img.jpeg')no-repeat center`;
    body.style.backgroundSize = `cover`;
  }else{
    body.style.backgroundImage = `linear-gradient(0.25turn,${choseColor1},${choseColor2})`;
  }
}
  
setColor();
btn.addEventListener("click", setColor);  