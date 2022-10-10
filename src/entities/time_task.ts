import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('time_task')
export class Time_task {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  id_task: number

  @Column()
  time: string 
}
