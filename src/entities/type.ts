import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('type')
export class Type {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  focus: string
}
