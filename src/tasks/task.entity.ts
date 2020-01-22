import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './types';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
