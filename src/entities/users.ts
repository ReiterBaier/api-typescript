import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm'

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
