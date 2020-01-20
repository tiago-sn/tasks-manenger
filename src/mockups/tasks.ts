import { Task, TaskStatus } from '../tasks/task.model';

export const tasks: Task[] = [
  {
    id: '47736d5b-2628-4100-bad3-d320bce5455f',
    title: 'Get a job',
    description: 'Go to work lazy bum.',
    status: TaskStatus.DONE
  },
  {
    id: '8af42200-b001-4eb0-a8e8-85fbfb0b3065',
    title: 'Study Arab Language',
    description: 'In order to read Arabian Nights in the originals.',
    status: TaskStatus.OPEN
  },
  {
    id: '52145f13-b1e1-4cba-89ef-e6b93cd18e0b',
    title: 'Go to Uruguay',
    description: 'Take a breeze.',
    status: TaskStatus.OPEN
  },
  {
    id: '7339bd46-6aed-45b4-9918-6e84aa457a74',
    title: 'Refact Tasks Manenger',
    description: 'Always inprove the code.',
    status: TaskStatus.IN_PROGRESS
  },
  {
    id: 'bff22c39-6883-48bf-8823-2b132bc4efd2',
    title: 'Watch Fresh Prince of Bel Air',
    description: "I'm in LOVE with Hilary Banks",
    status: TaskStatus.IN_PROGRESS
  }
];
