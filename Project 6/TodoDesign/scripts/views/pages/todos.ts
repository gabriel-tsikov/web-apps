import { createNewTodo } from '../../controllers/todoController';

export default function todos() {
  return { template: `
    
    <section class="table-section">
      <div class="table-section-heading">
        <h2>Todos</h2>
        <button class="button" id="newTodoLink">ADD TODO</button>
      </div>
      <div class="table-holder">
        <table id="todosTable">
          <thead>
            <tr class="bg-primary-dark">
              <th>Title</th>
              <th>Date of Creation</th>
              <th>Last Change</th>
              <th colspan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </section>`,
    listeners: [
        {
            targetId: 'newTodoLink',
            eventType: 'click',
            callback: () => createNewTodo('Create')
        }
    ]
  };
}
