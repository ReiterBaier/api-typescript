import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('stage')
export class Stage {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({name: "description", type: "longblob", nullable: true})
  description: Buffer 

  @Column()
  weight: number
}
