import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('client')
export class Client {
  @PrimaryColumn()
  id: number

  @Column()
  document: string

  @Column()
  name: string

  @Column()
  token: string 
}
