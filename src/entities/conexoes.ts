import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('conexoes')
export class Conexoes {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @Column()
  type: string

  @Column()
  host: number 

  @Column()
  port: number

  @Column()
  databasePath: number

  @Column()
  user: number 

  @Column()
  password: number 

  @Column()
  timeout: string

  @Column()
  integrationId: string 
}
