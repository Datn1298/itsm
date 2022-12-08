import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    task_id: number;

    @Column()
    start_date: string;

    @Column()
    end_date: string;

    @Column()
    ticket_id: number;

    @Column()
    type: string
}
