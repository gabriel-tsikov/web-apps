
import { createNewTeam } from "../../controllers/teamsController";

export default function teams() {
    return {
        template: `
        <section class="table-section">
        <div class="table-section-heading">
          <h2>Teams</h2>
          <button class="button-user" id="newTeamsLink">Create Team</button>
        </div>
        <div class="table-holder">
          <table id="teamsTable">
            <thead>
              <tr class="bg-primary-dark">
                <th>Title</th>
                <th>Date of creation</th>
                <th>Date of last change</th>
                <th colspan="2">Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </section>`,
        
        listeners: [
            {
                targetId: "newTeamsLink",
                eventType: 'click',
                callback: () => createNewTeam('Create')
            }
        ]
    }
}