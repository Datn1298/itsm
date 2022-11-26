import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('ticket')
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  ticket_id: number

  @Column()
  company: string
}