let todoItems=[];

displayTodo();


function todoInput()
{
    let takeInput= document.querySelector('#input-box');
    let inputValue= takeInput.value.trim();
    let takeDate= document.querySelector('#date-items');
    let dateValue= takeDate.value;
    if(inputValue==='' || dateValue==='')
    {
        alert("Either Todo or Date is missing!"); 
        return;
    }

        todoItems.push({item:inputValue, duedate:dateValue});

        takeInput.value='';
        takeDate.value='';

        displayTodo();
    
}

function displayTodo()
{
    let newHTML='';
    let displayItems=document.querySelector('.todo-list');
    displayItems.innerHTML='';
    for(let i=0;i<todoItems.length; i++)
    {
        let {item, duedate}= todoItems[i];
    
       newHTML+=`
       <div>
       <span>${item} </span>
       <span>${duedate}</span>
       <button onclick="deleteTodo(${i})">Delete
       </button>
       </div>
       `;
    }
    displayItems.innerHTML=newHTML;
}

function deleteTodo(index)
{
    todoItems.splice(index, 1);
    displayTodo();
}

document.querySelector('#input-box').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        todoInput();
    }
});