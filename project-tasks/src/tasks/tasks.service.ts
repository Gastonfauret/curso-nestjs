import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from './tasks.entity';
import { v4 as uuid, v4 } from 'uuid';
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [{
        id_task: '1',
        title: 'Task 1',
        description: 'Description Task nro. 1',
        status: TasksStatus.PENDING
    }]

    getAllTaks() {
        return this.tasks
    }
    createTask(title: string, description: string) {
        const task = {
            id_task: v4(),
            title,
            description,
            status: TasksStatus.PENDING
        }
        this.tasks.push(task);
        return task;
    }
    deleteTask(id_task: string) {
        this.tasks = this.tasks.filter(task => task.id_task !== id_task)
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id_task === id)
    }

    updateTask(id: string, updateFields: updateTaskDto): Task {
        const task = this.getTaskById(id);
        const newTask = Object.assign(task, updateFields);
        this.tasks = this.tasks.map(task => task.id_task === id ? newTask : task)
        return newTask;
    }
}

