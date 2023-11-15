import { TasksStatus } from "../tasks.entity";

export class CreateTaskDto {
    title: string;
    description: string;    
}

export class updateTaskDto {
    title?: string;
    description?: string;
    status?: TasksStatus;
}