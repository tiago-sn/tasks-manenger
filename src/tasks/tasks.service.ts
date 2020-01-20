import { Injectable, NotFoundException } from '@nestjs/common';
import uuid from 'uuid';

import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { tasks } from '../mockups/tasks';

@Injectable()
export class TasksService {
  private tasks: Task[] = tasks;

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilter(filterDto: GetTasksFilterDto) {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(
        task => task.title.includes(search) || task.description.includes(search)
      );
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find(task => task.id === id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }

    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): Task[] {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter(task => task.id !== found.id);

    return this.tasks;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  setTaskStatus(id: string, status: TaskStatus): Task {
    let updatedTask: Task;

    this.tasks.forEach(task => {
      if (task.id === id) {
        task.status = status;
        updatedTask = task;
      }
    });

    return updatedTask;
  }
}
