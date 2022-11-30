import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Ticket } from "src/modules/models/ticket.entity";
import { Downtime } from "src/modules/models/downtime.entity";
import { Task } from "src/modules/models/task.entity";
import { Release } from "src/modules/models/release.entity";


export const typeOrmModule: TypeOrmModuleOptions = {
    type: "postgres",
    host: "192.168.0.19",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "itsm",
    // entities: [Downtime, Task, Release, Ticket],
    entities: ['dist/modules/models/*.entity{.ts,.js}'],

    logging: true,
    synchronize: true
  }