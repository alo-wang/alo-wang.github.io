const toDoForm = document.querySelector('#todo-form');
const toDoinput = toDoForm.querySelector('input');
const listBox = document.querySelector('ul#list-box');

let toDos = [];

function saveToDos(){
    localStorage.setItem('todos',JSON.stringify(toDos)); // 배열에 저장된 아이템을 가져온다.
}

function deleteToDo(e){
    const li = e.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintTodo(newTodo){
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    
    listItem.appendChild(span).innerText = newTodo.text;
    listItem.appendChild(btn).innerText = 'X';
    listBox.appendChild(listItem).id = newTodo.id;
    
    btn.addEventListener('click',deleteToDo);
}

function todoSubmit(e){
    e.preventDefault();

    const newTodo = toDoinput.value;
    const newTOdoObject = {
     text : newTodo,
     id : Date.now(),   
    }
    toDoinput.value = "";
    toDos.push(newTOdoObject);
    paintTodo(newTOdoObject);
    saveToDos();
}

toDoForm.addEventListener('submit',todoSubmit);

const savedTodos = localStorage.getItem('todos');
if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}