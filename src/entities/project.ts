import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number

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
  id_status: number 

  @Column()
  creation_date: string

  @Column()
  previous_date: string 

  @Column()
  estimate_time: string 
}
