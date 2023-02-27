window.onload = function()
{
    var form = document.querySelector('#new-task-form');
    var input = document.querySelector('#new-task-input');
    var list = document.querySelector('#tasks');
    
    form.onsubmit = function(e)
    {
        e.preventDefault();
    
        const task =  input.value;
    
        if(!task)
        {
            alert("You have not entered information");
            return;
        }
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
    
        const taskContent = document.createElement('div');
        taskContent.classList.add('content');
    
        const taskContentInput = document.createElement('input');
        taskContentInput.type = 'text';
        taskContentInput.classList.add('text');
        taskContentInput.setAttribute('readonly', 'readonly');
        taskContentInput.value = task;
    
        const taskAction = document.createElement('div');
        taskAction.classList.add('actions');
    
        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit');
    
        const delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';
        delBtn.classList.add('delete');
    
        taskContent.appendChild(taskContentInput);
        taskAction.appendChild(editBtn);
        taskAction.appendChild(delBtn);
        taskElement.appendChild(taskContent);
        taskElement.appendChild(taskAction);
        list.appendChild(taskElement);
        input.value = "";
    
        delBtn.onclick = function()
        {
            list.removeChild(taskElement);
        };
    
        editBtn.onclick = function()
        {
            if(editBtn.innerText.toLowerCase() == 'edit')
            {
                editBtn.innerText = 'Save';
                taskContentInput.removeAttribute('readonly');
                taskContentInput.focus();
            }
            else
            {
                editBtn.innerText = 'Edit'
                taskContentInput.setAttribute('readonly','readonly');
            }
        }
    };   
}
