async function toDosLink_Click() {
    await render(toDoPage());
    const toDoTable = document.getElementById('toDoTable');
    const items = await ToDoRepository.getAll();

    if (items == null)
        return;
        
    for (let i = 0; i < items.length; i++) {
        
        const currentItem = items[i];
        
        const tr = document.createElement('TR');

        const listIdTd = document.createElement('TD');
        listIdTd.innerHTML = currentItem.id;

        const titleTd = document.createElement('TD');
        titleTd.innerHTML = currentItem.title;

        const createdTd = document.createElement('TD');
        createdTd.innerHTML = currentItem.createDate;

        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentItem.creatorId;

        const updateTd = document.createElement('TD');
        updateTd.innerHTML = currentItem.updateDate;

        const lastChangeUserIdTd = document.createElement('TD');
        lastChangeUserIdTd.innerHTML = currentItem.updaterId;


        const editTd = document.createElement('TD');
        const editButton = document.createElement('button');
        editButton.innerHTML = 'EDIT';
        editButton.addEventListener('click', () =>  toDoEditButton_Click(currentItem.id));
        editTd.appendChild(editButton);

        const TasksTd = document.createElement('TD');
        const TasksButton = document.createElement('BUTTON');
        TasksButton.innerHTML = 'TASKS';
        TasksButton.addEventListener('click', () => toDoTasksButton_Click(currentItem.id));
        TasksTd.appendChild(TasksButton);
        
        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => toDoDeleteButton_Click(currentItem.id));
        deleteTd.appendChild(deleteButton);

        

        const childAppend = [listIdTd,titleTd,createdTd,creatorIdTd,
        updateTd,lastChangeUserIdTd,editTd,TasksTd,deleteTd];
        for (let j = 0; j < childAppend.length; j++) {
            tr.appendChild(childAppend[j]);
            
        }
        
        toDoTable.appendChild(tr);
        
        
    }
}

    async function toDoEditLink_Click() {
        render(toDoDetailPage());
    }

    async function toDoEditButton_Click(id) {
        await toDoEditLink_Click();
        const item = await ToDoRepository.getById(id);
    
    
        document.getElementById('id').value = item.id;
        document.getElementById('title').value = item.title;
    
    }
    async function toDoDeleteButton_Click(id) {
        await ToDoRepository.deleteItem(id);
        await toDosLink_Click();
        
    }

    async function toDosEditForm_Submit(){
        const id = document.getElementById('id').value;
        const title = document.getElementById('title').value;
        
        const item = new ToDo( title);
        
        
        if (id == "" | undefined) {
            await ToDoRepository.addItem(item);
        } else {
            await ToDoRepository.editItem(id, item);
        }
    
        await toDosLink_Click();
    }




    async function toDoTasksButton_Click(id){
        await render(todoTasksPage());
    document.getElementById('newTaskLink').addEventListener('click', () => tasksEditLink_Click(id));
    

    const tasksTable = document.getElementById('TasksTable');
    const tasks = await TasksRepository.getAll(id);
        
    if (tasks == null || undefined || 0 )
        return;

    for (let i = 0; i < tasks.length; i++) {
        const currentTask = tasks[i];

        const tr = document.createElement('TR');
        
        const taskIdTd = document.createElement('TD');
        taskIdTd.innerHTML = currentTask.id;

        const listIdTd = document.createElement('TD');
        listIdTd.innerHTML = currentTask.taskListId;

        const taskTd = document.createElement('TD');
        taskTd.innerHTML = currentTask.title;


        const descriptionTd = document.createElement('TD');
        descriptionTd.innerHTML = currentTask.description;

        const creationDateTd = document.createElement('TD');
        creationDateTd.innerHTML = currentTask.creationDate;

        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentTask.creatorId;

        const lastChangeDateTd = document.createElement('TD');
        lastChangeDateTd.innerHTML = currentTask.updateDate;

        const lastChangeUserIdTd = document.createElement('TD');
        lastChangeUserIdTd.innerHTML = currentTask.updaterId;

        const isCompleteTd = document.createElement('TD');
        isCompleteTd.innerHTML = currentTask.isComplete;

        const editTd = document.createElement('TD');
        const editButton = document.createElement('BUTTON');
        editButton.innerHTML = 'EDIT';
        editButton.addEventListener('click', () =>tasksEditButton_Click(currentTask.taskListId,currentTask.id));
        editTd.appendChild(editButton);

        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => tasksDeleteButton_Click(currentTask.taskListId,currentTask.id));
        deleteTd.appendChild(deleteButton);
        const taskToAppend = [taskIdTd,listIdTd,taskTd,descriptionTd,creationDateTd,
            creatorIdTd,lastChangeDateTd,lastChangeUserIdTd,isCompleteTd,editTd,deleteTd]
        for(let k=0;k<taskToAppend.length; k++){
            tr.appendChild(taskToAppend[k]);
        }
        tasksTable.appendChild(tr);

        }
    }

    async function tasksEditLink_Click(id) {
        await render(tasksEditPage());
        document.getElementById('todoId').value = id;
    }
    
    async function tasksEditButton_Click(id) {
        await tasksEditLink_Click();
        const item = await TasksRepository.getById(id);
    
        document.getElementById('id').value = item.id;
        document.getElementById('todoId').value = item.taskListId;
        document.getElementById('task').value = item.title;
        document.getElementById('description').value = item.description;
        document.getElementById('isComplete').checked = item.isComplete;
        
    }
    
    async function taskEditForm_Submit() {
        const id = document.getElementById('id').value;
        const todoId = document.getElementById('todoId').value;
        const task = document.getElementById('task').value;
        const description = document.getElementById('description').value;
        const isComplete = document.getElementById('isComplete').checked;
    
        const item = new Task( task, description, isComplete);
    
        if (id == "") {
           
            await TasksRepository.addItem(item,todoId);
        } else {
            await TasksRepository.editItem(item, todoId, id);
        }
    
        await toDoTasksButton_Click(todoId);
    }
    
    async function tasksDeleteButton_Click(listId,id) {
        await TasksRepository.deleteTask(listId,id);
        await toDoTasksButton_Click(listId);
    }
    