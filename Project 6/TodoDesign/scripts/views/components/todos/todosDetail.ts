import { submitTaskForm } from "../../../controllers/taskController";
export default function todosDetail(title: string) {
    return { template: `
    <section id="task-info">
    <div class="left-block">
      <p class = "left-block-header">TODO Tasks Management</p>
      <div class="todo-details">
        <div>
          <h2 class="todo-title">Title: ${title}</h2>
        </div>
        <div class="inline">
          <p>Date of creation: </p>
          <p id="createDate"> </p>
        </div>
        <div class="inline">
          <p>Date of last edit: </p>
          <p id="updateDate"> </p>
        </div>
      </div>
      <div class="task-details">
        <div id="add-task-container"><a id="add-task-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M25,16.429H16.429V25H13.571V16.429H5V13.571h8.571V5h2.857v8.571H25Z" transform="translate(-5 -5)"/></svg></a></div>
        <div id="tasks-container"></div>
      </div>
    </div>
    <div id="right-block">
        <p id="action" class="left-block-header"></p>
      <form id="task-edit-form">
        <input  type="hidden" id="id" name="id" />
        <input type="hidden" id="taskListId" name="taskListId" />
        <div>
          <label class="over" for="title">title:</label>
          <input class="form-control-task over" type="text" id="title" name="titie" />
        </div>
        <div>
          <label  class="over"  for="description">description:</label>
          <input class="form-control-task-textfield over" type="text" id="description" name="description" />
        </div>
        <div class="is-complete">
          <input  type="checkbox" id="isComplete" />
        </div>
        <div class="saveTaskForm">
          <input id="saveTaskForm" class="btn btn-primary" type="button" value="Save" />
        </div>
      </form>
    </div>
  </section>`,
        listeners: [ {
            targetId: 'saveTaskForm',
            eventType: 'click',
            callback: submitTaskForm
        }]
    };
}