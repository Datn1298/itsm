import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './modules/ticket/ticket.module';
import { TicketController } from './modules/ticket/ticket.controller';
import { TicketService } from './modules/ticket/ticket.service';
import { typeOrmModule } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TicketModule, TypeOrmModule.forRoot(typeOrmModule)],
  controllers: [AppController, TicketController],
  providers: [AppService, TicketService],
})
export class AppModule {}
