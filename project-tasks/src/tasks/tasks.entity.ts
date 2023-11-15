export enum TasksStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class Task {
    id_task: string;
    title: string;
    description: string;
    status: TasksStatus;
}




