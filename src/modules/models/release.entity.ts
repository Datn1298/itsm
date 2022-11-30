import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('release')
export class Release extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    release_id: number;

    @Column()
    start_date: string;

    @Column()
    end_date: string;

    @Column()
    ticket_id: number;
}
