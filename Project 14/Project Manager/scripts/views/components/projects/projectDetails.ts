
export default function projectDetails() {
    return { template: `
    <section class="project">
        <div class="main-headers">
            <h1>Project Name</h1>
        </div>
        <div class="task-project-holder">
        </div>
    </section>
    <section class="task-project">
            <div class="task-main-headers">
                <h1>Tasks</h1>
                <button class="button-project" id="taskCreateBtn">Create Task</button>
            </div>
            <div class="task-holder">
            
            </div>
        </section>
    `,
        listeners: []
    }
}