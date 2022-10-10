import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  idMainTask: number

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
  creationDate: string 

  @Column()
  previousDate: string 

  @Column()
  startDate: string 

  @Column()
  conclusionDate: string 

  @Column()
  estimateTime: number 
}
