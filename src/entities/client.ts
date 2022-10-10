import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: number

  @Column()
  document: string

  @Column()
  name: string

  @Column()
  token: string 
}
