import { TeamItem } from "../utils/models";
import { render, modal } from "../utils/helpers";
import { MAIN_CONTENT_SELECTOR } from "../utils/constants";
import teamService from "../services/teamService";
import Team from "../enteties/Team";
import { teamsEdit, teamsMembers } from "../views/components/teams/index";
import teams from "../views/pages/teams";

import MemberService from "../services/memberService";

function generateTeamsTable(currentItem: TeamItem): HTMLElement {
    const {id,title,createDate,updateDate} = currentItem;

    const row: HTMLElement = document.createElement('tr');
    row.innerHTML = `
      <td>${title}</td>
      <td>${createDate}</td>
      <td>${updateDate}</td>
      <td class="action-buttons-container" colspan="2">
        <a class="action-button member-add-button" title="Add member"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="19.118" viewBox="0 0 24 19.118"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M16.273,13.559a4.585,4.585,0,0,0,4.364-4.78A4.585,4.585,0,0,0,16.273,4a4.585,4.585,0,0,0-4.364,4.78A4.585,4.585,0,0,0,16.273,13.559Zm-9.818-2.39V7.585H4.273v3.585H1v2.39H4.273v3.585H6.455V13.559H9.727v-2.39Zm9.818,4.78c-2.913,0-8.727,1.6-8.727,4.78v2.39H25v-2.39C25,17.55,19.185,15.949,16.273,15.949Z" transform="translate(-1 -4)"/></svg></a>
        <a class="action-button team-edit-button" title="Edit team"><svg xmlns="http://www.w3.org/2000/svg" width="21.288" height="20.985" viewBox="0 0 21.288 20.985"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M3,19.611v4.371H7.434L20.513,11.09,16.078,6.719ZM23.942,7.71a1.149,1.149,0,0,0,0-1.644L21.175,3.338a1.19,1.19,0,0,0-1.667,0L17.344,5.472l4.434,4.371L23.942,7.71Z" transform="translate(-3 -2.997)"/></svg></a>
        <a class="action-button team-delete-button" title="Delete team"><svg xmlns="http://www.w3.org/2000/svg" width="18.92" height="23.313" viewBox="0 0 18.92 23.313"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M6.351,23.723a2.656,2.656,0,0,0,2.7,2.59H19.866a2.656,2.656,0,0,0,2.7-2.59V8.181H6.351ZM23.92,4.3H19.19L17.839,3H11.081L9.73,4.3H5v2.59H23.92Z" transform="translate(-5 -3)"/></svg></a>
      </td>
    `;
    row.querySelector('.member-add-button')
    .addEventListener('click', () => addMember(id));
    row.querySelector('.team-edit-button')
    .addEventListener('click', () => editTeam(id));
    row.querySelector('.team-delete-button')
    .addEventListener('click', () => {
        if (confirm("Do u want to delete?")) {
            deleteTeam(id);
        } else {
            
        }
        });

    return row;
}

export  async function loadTeams(): Promise<void> {
    render(MAIN_CONTENT_SELECTOR,teams());

    const teamsTable: HTMLElement = document.getElementById('teamsTable')as HTMLElement;
    const items: Array<TeamItem> = await teamService.getAll();

    if(!items) {
        return;
    }

    for (const item of items) {
        teamsTable.appendChild(generateTeamsTable(item));
    }
}


export function createNewTeam(action: string): void {
    modal(teamsEdit(action));
}

export async function editTeam(id:string):Promise<void> {
    modal(teamsEdit('Edit'));

    const item: TeamItem = await teamService.getById(id);
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('title') as HTMLInputElement).value = item.title;
    (document.getElementById('createDate') as HTMLInputElement).value = item.createDate;
    (document.getElementById('updateDate') as HTMLInputElement).value = item.updateDate;
    
}

export async function submitTeamForm(): Promise<void> {
    const id: string = (document.getElementById('id')as HTMLInputElement).value;
    const title: string = (document.getElementById('title')as HTMLInputElement).value;
    
    const item: Team = new Team(id,title);

    if (id === '') {
        await teamService.addItem(item);
    } else {
        await teamService.editItem(item);
    }

    await loadTeams();
}

async function deleteTeam(id: string): Promise<void> {
    await teamService.deleteItem(id);
    await loadTeams();
}
export async function addMember(id:string):Promise<void> {
    modal(teamsMembers());
    const item: TeamItem = await teamService.getById(id);
    (document.getElementById('teamId')as HTMLInputElement).value = item.id;
}
export async function addMemeberTeamForm(): Promise<void> {
    const userId: string = (document.getElementById('userId')as HTMLInputElement).value;
    const teamId: string = (document.getElementById('teamId')as HTMLInputElement).value;
   
    await MemberService.addMember(userId,teamId);
}