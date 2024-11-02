import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { BaseEntity } from '@entities/base.entity';

@Entity('videos')
export class Videos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'task_id' })
  @Index({ unique: true })
  taskId: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ nullable: true })
  link: string;

  @Column({ default: 'pending' })
  status: string;
}
