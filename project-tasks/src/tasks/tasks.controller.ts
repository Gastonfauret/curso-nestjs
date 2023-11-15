import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTaks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto) {       
        return this.tasksService.createTask(newTask.title, newTask.description);
    }

    @Delete(':id_task')
    deleteTask(@Param('id_task') id_task: string) { 
        this.tasksService.deleteTask(id_task);
    }

    @Patch(':id_task')
    updateTask(@Param('id_task') id_task: string, @Body() updateFields: updateTaskDto ) {
        return this.tasksService.updateTask(id_task, updateFields);
    }

}
