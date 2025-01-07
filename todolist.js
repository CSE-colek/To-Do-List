const userInput = document.getElementById('inputtext');
const addButton = document.getElementById('add');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', function(){
    let taskValue = userInput.value;

    if (taskValue === "") {
        userInput.placeholder = 'Please enter a task!';
        return;
    }
    const listItem = document.createElement('li');
    
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    
    const label = document.createElement('label')
    label.textContent = taskValue;

    const deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton'
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){
        listItem.remove();
    });
    
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    listItem.style.border = '1px solid black'; 
    taskList.appendChild(listItem);
    
    
});

