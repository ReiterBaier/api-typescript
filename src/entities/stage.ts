import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('stage')
export class Stage {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  weight: number

  @Column()
  projectId: number 
}
