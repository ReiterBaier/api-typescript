import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('plataform')
export class Plataform {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string

  @Column()
  document: string

}
