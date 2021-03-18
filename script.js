let $todoInput; // here user type text
let $alertInfo; // Info about no exercises on list
let $addBtn; // add button
let $ulList; // list of exercises
let $newTask; // new task
let $toolsPanel // panel with done edit exit
let $completeBtn // done
let $editBtn //edit
let $deleteBtn //delete
let $popup // deonload popup
let $popupInfo // popup alert
let $editedTodo // edited to do
let $popupInput // text inside popup
let $addPopupBtn //confirm button
let $closeTodoBtn // close popup btn
let $idNumber = 0;
let $allTasks





const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}


const prepareDOMElements = () => {

    $todoInput= document.querySelector('.todoInput')
    $alertInfo= document.querySelector('.alertInfo')
    $addBtn= document.querySelector('.addBtn')
    $ulList= document.querySelector('.todoList ul')
    $allTasks= $ulList.getElementsByTagName('li')


$popup = document.querySelector('.popup')
$popupInfo = document.querySelector('.popupInfo')
$popupInput = document.querySelector('.popupInput')
$addPopupBtn= document.querySelector('.accept')
$closeTodoBtn=document.querySelector('.cancel')

}
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup)
    $addPopupBtn.addEventListener('click',changeTodo)
    $todoInput.addEventListener('keyup', enterCheck)
}


const addNewTask = () => {
    if($todoInput.value !==""){
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerHTML = $todoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`)
        $ulList.appendChild($newTask)
        $todoInput.value= ""
        $alertInfo.innerHTML= ""
        createToolsArea()
        
    }else{
        $alertInfo.innerHTML="Provide some text"
    }
}

const createToolsArea = () => {
const $toolsPanel=document.createElement('div')
$toolsPanel.classList.add('tools')
$newTask.appendChild($toolsPanel)

const $completeBtn = document.createElement('button')
$completeBtn.classList.add('complete')
$completeBtn.innerHTML="<i class='fas fa-check'></i>"

const $editBtn = document.createElement('button')
$editBtn.classList.add('edit')
$editBtn.innerHTML = "EDIT"

const $deleteBtn = document.createElement('button')
$deleteBtn.classList.add('delete')
$deleteBtn.innerHTML="<i class='fas fa-times'></i>"



$toolsPanel.appendChild($completeBtn)
$toolsPanel.appendChild($editBtn)
$toolsPanel.appendChild($deleteBtn)


}

const checkClick = (e) => {
    if(e.target.closest('button').classList.contains('complete')){
        e.target.closest('li').classList.toggle('completed')
    }else if(e.target.closest('button').className === 'edit'){
        editTask(e)
    }else if(e.target.closest('button').className === 'delete'){
        console.log('delete')
        deleteTask(e)
    }
}


const editTask = (e) => {
    const oldTodo = e.target.closest('li').id
    $editedTodo = document.getElementById(oldTodo)
    $popupInput.value =  $editedTodo.firstChild.textContent
    $popup.style.display = 'flex'
}

const closePopup = () =>{
    $popup.style.display = 'none'
    $popupInfo.innerText=""
}

const changeTodo = () => {
    if($popupInput.value !== ''){
        $editedTodo.firstChild.textContent= $popupInput.value;
        $popup.style.display='none'
        $popupInfo.innerText=""
    }else{
        $popupInfo.innerText ='Provide some text'
    }
}


const deleteTask = (e) =>{
const deleteTodo = e.target.closest('li')
deleteTodo.remove()

if ($allTasks===0){
    $alertInfo.innerHTML ='No task to do'

}
}

const enterCheck = () =>{
    if(event.keyCode === 13){
        addNewTask()
    }
}



document.addEventListener('DOMContentLoaded', main)