import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('plataform')
export class Plataform {
  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  name: string

}
