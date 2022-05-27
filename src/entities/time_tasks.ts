import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('time_tasks')
export class Time_tasks {
  @PrimaryColumn()
  id: number

  @Column()
  id_task: number

  @Column()
  time: string 
}
