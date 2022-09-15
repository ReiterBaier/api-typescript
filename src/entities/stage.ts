import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('stage')
export class Stage {
  @PrimaryColumn()
  id?: number

  @Column()
  name?: string

  @Column()
  burden?: number

  @Column()
  integrationId?: string 
}
