import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('downtime')
export class Downtime extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    downtime_id: number;

    @Column()
    start_date: string;

    @Column()
    end_date: string;

    @Column()
    ticket_id: number;
}
