const flipImg = document.querySelectorAll('figure');
const flipText = document.querySelectorAll('figure p');
const flipBtn = document.querySelectorAll('figure figcaption');

flipBtn.forEach(element => {
    console.log(element)
    element.addEventListener('click',randomText);
    randomText();
});

// flip(class list)
function flipClass(item){
    flipImg.forEach(function(item){
        item.addEventListener('click',function(){
            flipImg.forEach(function(e){
                e.classList.remove('active'); 
            });
            item.classList.add('active');
        }); 
    });
}

// random event
function randomText(){
    flipText.forEach(element => {
        element.innerHTML = `<span>축하해요!</span>` + Math.ceil(Math.random() * 10);
    });
    flipClass();
}

