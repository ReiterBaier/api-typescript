import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  document: string

  @Column()
  name: string

  @Column()
  token: string 
}
