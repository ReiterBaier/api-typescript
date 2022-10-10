import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  token: string 
}
