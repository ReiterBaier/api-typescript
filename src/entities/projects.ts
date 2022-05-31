import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('projects')
export class Projects {
  @PrimaryColumn()
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
