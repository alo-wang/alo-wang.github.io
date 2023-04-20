const imgs = [
    "img-jion-1.svg",
    "img-jion-2.svg",
];

const choseImg = imgs[Math.floor(Math.random() * imgs.length)];

console.log(choseImg);

const bgImg = document.createElement("img"); // 작은따옴표 말고 큰따옴표로 작성할것.

bgImg.src = `img/${choseImg}`;

console.log(bgImg); // 결과로는 src의 내용은 아직까지 텍스트의 불가하다.

document.body.append(bgImg);