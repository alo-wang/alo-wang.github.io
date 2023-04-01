const greeting = document.querySelector('h1#greeting');
const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginBtn = loginForm.querySelector('button');

const HIDDEN_CLASSNAME = 'hidden'; 
const USERNAME_KEY = 'username'; 

const saveUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(e){
    e.preventDefault();
    
    const username = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    onGreeting(username);
}

function onGreeting(username){
    greeting.innerText = `welcome! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(saveUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    onGreeting(saveUserName);
}