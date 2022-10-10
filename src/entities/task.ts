import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  main_task: number

  @Column()
  name: string

  @Column()
  description: string 

  @Column()
  id_client: number

  @Column()
  id_plataform: number

  @Column()
  id_type: number 

  @Column()
  id_user: number 

  @Column()
  id_status: string

  @Column()
  creation_date: string 

  @Column()
  previous_date: string 

  @Column()
  start_date: string 

  @Column()
  conclusion_date: string 

  @Column()
  estimate_time: string 
}
