import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskStatus } from './types';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService]
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // describe('setTaskStatus', () => {
  //   it('Update task status', () => {
  //     const task = service.createTask({
  //       title: 'test title',
  //       description: 'test description'
  //     });

  //     const updatedTask = service.setTaskStatus(task.id, TaskStatus.DONE);

  //     expect(updatedTask.status).toBe(TaskStatus.DONE);
  //   });
  // });
});
