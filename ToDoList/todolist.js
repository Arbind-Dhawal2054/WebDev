let todoItems=[];

displayTodo();


function todoInput()
{
    let takeInput= document.querySelector('#input-box');
    let inputValue= takeInput.value.trim();
    if(inputValue!=='')
    {
        todoItems.push(inputValue);
        takeInput.value='';

        displayTodo();
    }
}

function displayTodo()
{
    let displayItems=document.querySelector('#todo-list');
    displayItems.innerText='';
    for(let i=0;i<todoItems.length; i++)
    {
        displayItems.innerText=displayItems.innerText+ '\n'+todoItems[i];
    }
}

document.querySelector('#input-box').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        todoInput();
    }
});