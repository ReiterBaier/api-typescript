import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('stage')
export class Stage {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @Column()
  burden?: number

  @Column()
  integrationId?: string 
}
