import { Entity, Column, PrimaryColumn, ObjectIdColumn, ObjectLiteral } from 'typeorm'

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
