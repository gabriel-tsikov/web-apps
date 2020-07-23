export type Listener = {
    targetId: string,
    eventType: string,
    callback(): void
}
export type LoggedUser = {
    id: string,
    isAdmin: boolean
}
  
export type UserItem = {
    id: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    isAdmin: boolean
}

export type TeamItem = {
    id: string,
    title: string,
    createDate:string,
    updateDate:string,
    
    

}

export type TaskItem = {
    id: string,
    projectId:string,
    title: string,
    description: string,
    status: string,
    assigneeId: string,
    
    
}

export type ProjectItem = {
    id: string,
    title: string,
    description: string,
    
}

export type WorkLogItem = {
    id: string,
    time: string,
    date: string,
    userId: string,
    
}
  