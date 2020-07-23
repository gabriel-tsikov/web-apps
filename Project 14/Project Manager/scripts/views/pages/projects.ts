import { createNewProject } from "../../controllers/projectsController";

export default function projects() {
    return {
        template: `
        <section class="dashboard">
            <div class="main-headers">
                <h1>Dashboard</h1>
            </div>
            <div class="dash-boxes">
                <div class="dash-item">
                    <div class="dash-content">
                        <img src="scripts/views/pictures/ic_trending_up_24px.png">
                    </div>
                </div>
                <div class="dash-item">
                    <div class="dash-content">
                        <img src="scripts/views/pictures/ic_trending_up_24px.png">
                    </div>
                </div>
                <div class="dash-item">
                    <div class="dash-content">
                        <img src="scripts/views/pictures/ic_trending_up_24px.png">
                    </div>
                </div>
                <div class="dash-item">
                    <div class="dash-content">
                        <img src="scripts/views/pictures/ic_trending_up_24px.png">
                    </div>
                </div>
            </div>
            
            
            
        </section>
        <section class="projects">
            <div class="main-headers">
                <h1>Projects</h1>
                <button class="button-project" id="create-project-btn">Create project</button>
            </div>
            <div class="project-holder">
            
            </div>
        </section>`,
        listeners: [
            {
                targetId: 'create-project-btn',
                eventType: 'click',
                callback: () => createNewProject('Create')
            }
        ]
    }
}