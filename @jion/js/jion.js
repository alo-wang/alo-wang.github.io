const flipImg = document.querySelectorAll('figure');
const flipText = document.querySelectorAll('figure p');
const flipBtn = document.querySelectorAll('figure figcaption');

selectIndex(10,10)

flipBtn.forEach(element => {
    flipClass();
});

// flip(class list)
function flipClass(item){
    flipImg.forEach(function(item){
        item.addEventListener('click',function(){
            flipImg.forEach(function(e){
                //e.classList.remove('active'); 
            });
            item.classList.add('active');
        }); 
    });
}

// set random number
function selectIndex(totalIndex, selectingNumber){
    let randomIndexArray = []
    for (i=0; i<selectingNumber; i++) {
        let randomNum = Math.floor(Math.random() * totalIndex + 1);

        if (randomIndexArray.indexOf(randomNum) === -1) {
            randomIndexArray.push(randomNum)
            flipText[i].innerHTML = `<span>축하해요!</span>` + randomIndexArray[i];
            // console.log('test',flipText[i].innerHTML)
        } else { 
            i--
        }
    }
    return randomIndexArray
}