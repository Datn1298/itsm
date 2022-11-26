import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmModule: TypeOrmModuleOptions = {
    type: "postgres",
    host: "192.168.0.19",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "itsm",
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    logging: true,
    synchronize: true
  }