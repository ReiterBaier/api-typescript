import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('client')
export class ClientScript {

  @PrimaryColumn()
  token: string
  
  @Column({name: "script", type: "longblob", nullable: false})
  script: Buffer
}
