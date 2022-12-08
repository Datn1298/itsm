import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ReleaseModule } from './modules/release/release.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { TaskModule } from './modules/task/task.module';
import { DowntimeModule } from './modules/downtime/downtime.module';
import { typeOrmModule } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from './modules/http/http.module';

@Module({
  // imports: [TicketModule, TypeOrmModule.forRoot(typeOrmModule), ReleaseModule],
  // controllers: [AppController, TicketController],
  // providers: [AppService, TicketService],
  imports: [TicketModule, ReleaseModule, TaskModule, DowntimeModule, TypeOrmModule.forRoot(typeOrmModule), HttpModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
