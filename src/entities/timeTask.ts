import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('timeTask')
export class timeTask {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  idTask: number

  @Column()
  time: number 
}
