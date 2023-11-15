import { TasksStatus } from "../tasks.entity";
import { IsNotEmpty, IsString, Min, MinLength, IsOptional, IsIn } from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;    
}

export class updateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([TasksStatus.PENDING, TasksStatus.IN_PROGRESS, TasksStatus.DONE])
    status?: TasksStatus;
}