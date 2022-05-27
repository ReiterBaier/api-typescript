import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('plataform')
export class Plataform {
  @PrimaryColumn()
  id: number
  
  @Column()
  name: string

}
