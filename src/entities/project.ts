import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({name: "description", type: "longblob", nullable: true})
  description: Buffer 

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
  creationDate: string

  @Column()
  previousStartDate: string 

  @Column({type: "date"})
  startDate: string 

  @Column({type: "date"})
  previousConclusionDate: string 

  @Column({type: "date"})
  conclusionDate: string 

  @Column()
  estimateTime: number 
}
