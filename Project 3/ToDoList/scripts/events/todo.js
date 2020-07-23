async function toDosLink_Click() {
    await render(toDoPage());
    const toDoTable = document.getElementById('toDoTable');
    const loggedUser = await AuthenticationService.getLoggedUser();
    const loggedId = loggedUser._id;
    const items = await ToDoRepository.getAll();

    if (items == null)
        return;
        
    for (let i = 0; i < items.length; i++) {
        
        const currentItem = items[i];
        if(loggedId != currentItem._userId ){
            if(!loggedUser._isAdmin ){
                continue;
            }
            
        }
        
        const tr = document.createElement('TR');

        const listIdTd = document.createElement('TD');
        listIdTd.innerHTML = currentItem._id;

        const titleTd = document.createElement('TD');
        titleTd.innerHTML = currentItem._toDoTitle;

        const createdTd = document.createElement('TD');
        createdTd.innerHTML = currentItem._creationDate;

        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentItem._userId;

        const updateTd = document.createElement('TD');
        updateTd.innerHTML = currentItem._lastChangeDate;

        const lastChangeUserIdTd = document.createElement('TD');
        lastChangeUserIdTd.innerHTML = currentItem._lastChangeUserId;


        const editTd = document.createElement('TD');
        const editButton = document.createElement('button');
        editButton.innerHTML = 'EDIT';
        editButton.addEventListener('click', () =>  toDoEditButton_Click(currentItem._id));
        editTd.appendChild(editButton);

        const TasksTd = document.createElement('TD');
        const TasksButton = document.createElement('BUTTON');
        TasksButton.innerHTML = 'TASKS';
        TasksButton.addEventListener('click', () => toDoTasksButton_Click(currentItem._id));
        TasksTd.appendChild(TasksButton);
        
        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => toDoDeleteButton_Click(currentItem._id));
        deleteTd.appendChild(deleteButton);

        const childAppend = [listIdTd,titleTd,createdTd,creatorIdTd,updateTd,lastChangeUserIdTd,editTd,TasksTd,deleteTd];
        
        for (let j = 0; j < childAppend.length; j++) {
            tr.appendChild(childAppend[j]);
            
        }
        
        toDoTable.appendChild(tr);
        
        
    }
}

    async function toDoEditLink_Click() {
        render(toDoDetailPage());
        const loggedUser = await AuthenticationService.getLoggedUser();
        document.getElementById('userId').value = loggedUser._id;
        document.getElementById('lastChangeUserId').value = loggedUser._id;
        
    }

    async function toDoEditButton_Click(id) {
        await toDoEditLink_Click();
        const item = await ToDoRepository.getById(id);
    
    
        document.getElementById('id').value = item._id;
        document.getElementById('userId').value = item._userId;
        document.getElementById('title').value = item._toDoTitle;
        document.getElementById('lastChangeUserId').value  = item._lastChangeUserId;
    
    }
    async function toDoDeleteButton_Click(id) {
        await ToDoRepository.deleteTodo(id);
        await toDosLink_Click();
        
    }

    async function toDosEditForm_Submit(){
        const loggedUser = await AuthenticationService.getLoggedUser();

        const id = document.getElementById('id').value;
        const userId = document.getElementById('userId').value;
        const title = document.getElementById('title').value;
        const lastChangeUserId = loggedUser._id;
        
    
        
        const item = new ToDo(userId, title);
        item.lastChangeUserId = lastChangeUserId;
        
        if (id == "" | undefined) {
            await ToDoRepository.addTodo(item);
        } else {
            await ToDoRepository.editTodo(id, item);
        }
    
        await toDosLink_Click();
    }




    async function toDoTasksButton_Click(id){
        await render(todoTasksPage());
        document.getElementById('newTaskLink').addEventListener('click', () => tasksEditLink_Click(id));

        const item = await ToDoRepository.getById(id);
        const user = await UsersRepository.getById(item._userId);

        document.getElementById('username').innerHTML = user._username;
        document.getElementById('toDo').innerHTML = item._toDoTitle;
    

        const tasksTable = document.getElementById('TasksTable');
        const tasks = await TasksRepository.getByParentId(item._id);
        
        if (tasks == null || undefined || 0 )
            return;

        for (let i = 0; i < tasks.length; i++) {
            const currentTask = tasks[i];

            const tr = document.createElement('TR');
        
            const taskIdTd = document.createElement('TD');
            taskIdTd.innerHTML = currentTask._id;

            const listIdTd = document.createElement('TD');
            listIdTd.innerHTML = id;

            const taskTd = document.createElement('TD');
            taskTd.innerHTML = currentTask._task;


            const descriptionTd = document.createElement('TD');
            descriptionTd.innerHTML = currentTask._task;

            const creationDateTd = document.createElement('TD');
            creationDateTd.innerHTML = currentTask._creationDate;

            const creatorIdTd = document.createElement('TD');
            creatorIdTd.innerHTML = user._id;

            const lastChangeDateTd = document.createElement('TD');
            lastChangeDateTd.innerHTML = currentTask._lastChangeDate;

            const lastChangeUserIdTd = document.createElement('TD');
            lastChangeUserIdTd.innerHTML = currentTask._lastChangeUserId;

            const isCompleteTd = document.createElement('TD');
            isCompleteTd.innerHTML = currentTask._isComplete;

            const editTd = document.createElement('TD');
            const editButton = document.createElement('BUTTON');
            editButton.innerHTML = 'EDIT';
            editButton.addEventListener('click', () =>tasksEditButton_Click(currentTask._id));
            editTd.appendChild(editButton);

            const deleteTd = document.createElement('TD');
            const deleteButton = document.createElement('BUTTON');
            deleteButton.innerHTML = 'DELETE';
            deleteButton.addEventListener('click', () => tasksDeleteButton_Click(currentTask._id, currentTask._toDoId));
            deleteTd.appendChild(deleteButton);

            for(let k=0;k<childAppend.length; k++){
                tr.appendChild(childAppend[k]);
            }
            tasksTable.appendChild(tr);

        }
    }

    async function tasksEditLink_Click(todoId) {
        await render(tasksEditPage());
        const loggedUser = await AuthenticationService.getLoggedUser();

        document.getElementById('todoId').value = todoId;
        document.getElementById('lastChangeUserId').value = loggedUser._id;
    }
    
    async function tasksEditButton_Click(id) {
        await tasksEditLink_Click();
        const item = await TasksRepository.getById(id);
    
        document.getElementById('id').value = item._id;
        document.getElementById('todoId').value = item._toDoId;
        document.getElementById('task').value = item._task;
        document.getElementById('lastChangeUserId').value = item._lastChangeUserId;
        document.getElementById('description').value = item._description;
        document.getElementById('isComplete').checked = item._isComplete;
        
    }
    
    async function taskEditForm_Submit() {
        const id = document.getElementById('id').value;
        const todoId = document.getElementById('todoId').value;
        const task = document.getElementById('task').value;
        const lastChangeUserId = document.getElementById('lastChangeUserId').value;
        const description = document.getElementById('description').value;
        const isComplete = document.getElementById('isComplete').checked;
    
        const item = new Task(todoId, task, description, lastChangeUserId, isComplete);
    
        if (id == "") {
           
            await TasksRepository.addTask(item);
        } else {
            await TasksRepository.editTask(id, item);
        }
    
        await toDoTasksButton_Click(todoId);
    }
    
    async function tasksDeleteButton_Click(id, parentId) {
        await TasksRepository.deleteTask(id);
        await toDoTasksButton_Click(parentId);
    }
    