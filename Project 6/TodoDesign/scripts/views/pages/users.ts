import { createNewUser } from '../../controllers/usersController';

export default function users() {
  return {
    template: `
      <section class="table-section">
      
        <div class="table-section-heading">
          <h2>Users</h2>
          <button class="button" id="newUserLink">New</button>
        </div>
        <div class="table-holder">
          <table id="usersTable">
            <thead>
              <tr class="bg-primary-dark">
                <th>Username</th>
                <th>Password</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Is admin</th>
                <th colspan="2">Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </section>`,
    listeners: [
      {
        targetId: 'newUserLink',
        eventType: 'click',
        callback: () => createNewUser('Create')
      }
    ]
  };
}
