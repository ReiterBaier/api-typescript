import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('types')
export class Types {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @Column()
  focus: string
}
