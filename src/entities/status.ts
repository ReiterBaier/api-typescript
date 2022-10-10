import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('status')
export class Status {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  focus: string

}
