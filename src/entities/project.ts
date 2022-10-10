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
  idClient: number 

  @Column()
  idPlataform: number

  @Column()
  idType: number

  @Column()
  idUser: number 

  @Column()
  idStatus: number 

  @Column()
  idStage: number 

  @Column()
  creationDate: string

  @Column()
  previousDate: string 

  @Column()
  estimateTime: string 
}
