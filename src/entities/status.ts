import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('status')
export class Status {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

}
