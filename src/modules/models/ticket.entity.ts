import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('ticket')
export class Ticket extends BaseEntity {
  @PrimaryColumn()
  ticket_id: number

  @Column()
  company: string

  @Column()
  requester: string

  @Column()
  system_name: string

  @Column()
  purpose: string
}