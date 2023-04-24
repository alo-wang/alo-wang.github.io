const flipImg = document.querySelectorAll('figure');
const flipText = document.querySelectorAll('figure p');
const flipBtn = document.querySelectorAll('figure figcaption');

flipBtn.forEach(element => {
    // element.addEventListener('click',randomText);
    randomText();
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

// random event
function randomText(){
    let randomIndexArray = [];
    const randomNumber = [1,2,3,4,5,6,7,8,9,10];
    

    // test중
    // https://velog.io/@eunjin/Javascript-%ED%8A%B9%EC%A0%95-%EC%88%AB%EC%9E%90-%EB%B2%94%EC%9C%84%EC%97%90%EC%84%9C-%EC%A4%91%EB%B3%B5%EC%9D%84-%EC%A0%9C%EC%99%B8%ED%95%9C-%EB%9E%9C%EB%8D%A4-%EC%88%AB%EC%9E%90-%EB%BD%91%EB%8A%94-%EB%B0%A9%EB%B2%95
    flipText.forEach(element => {
        for (i = 0; i < randomNumber.length; i++) {   //check if there is any duplicate index
            let randomNum = Math.floor(Math.random() * randomNumber.length);
            
            //console.log(randomNumber.indexOf(randomNum))
            if (randomNumber.indexOf(randomNum) === -1) {
                // randomNumber.push(randomNum)
                element.innerHTML = `<span>축하해요!</span>` + randomNum;
            } else { //if the randomNum is already in the array retry
              i--
            }
        }

    });


    // return

    /*
    flipText.forEach(element => {
        // element.innerHTML = `<span>축하해요!</span>` + Math.ceil(Math.random() * 10);

        element.innerHTML = `<span>축하해요!</span>` + randomNumber[Math.floor(Math.random() * randomNumber.length)];
        
    });
    */
    flipClass();
}

