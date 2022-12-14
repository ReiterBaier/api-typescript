import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  idMainTask: number

  @Column()
  idProject: number

  @Column()
  name: string

  @Column({name: "description", type: "longblob", nullable: false})
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

  @Column({type: "date"})
  expectedStartDate: string 

  @Column({type: "date"})
  startDate: string 

  @Column({type: "date"})
  expectedEndDate: string 

  @Column({type: "date"})
  endDate: string 

  @Column()
  estimateTime: number 
}

