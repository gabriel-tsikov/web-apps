import { createNewUser } from '../../controllers/usersController';

export default function users() {
  return {
    template: `
      <section class="table-section">
        <div class="table-section-heading">
          <h2>Users</h2>
          <button class="button-user" id="newUserLink">Create User</button>
        </div>
        <div class="table-holder">
          <table id="usersTable">
            <thead>
              <tr class="bg-primary-dark">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
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
