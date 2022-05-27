import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('user')
export class User {
  @PrimaryColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  token: string 
}
