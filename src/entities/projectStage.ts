import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('projectStage')
export class ProjectStage {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  idStage: number

  @Column()
  idProject: number 

  @Column({name: "description", type: "longblob", nullable: true})
  description: Buffer 
}
