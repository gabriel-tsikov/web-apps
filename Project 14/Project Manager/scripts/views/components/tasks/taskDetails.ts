export default function taskDetails() {
    return { template: `
    <section class="task-section">
        <div class="main-headers">
            <h1>Task</h1>
        </div>
        <div class="task-work-holder">
        
        </div>
    </section>
    <section class="task-work">
            <div class="work-main-headers">
                <h1>Tasks</h1>
                <button class="button-project" id="workCreateBtn">Create Task</button>
            </div>
            <div class="work-holder">
            
            </div>
        </section>
    `,
        listeners: []
    }
}