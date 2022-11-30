import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
@Module({
    controllers: [TicketController],
    // imports: [TypeOrmModule.forFeature([TicketRepository])],
    providers: [TicketService]
})

// @Module({
//     // imports: [DatabaseModule],
//     controllers: [TicketController],
//     providers: [
//       ...TicketRepository,
//       TicketService,
//     ],
//   })
export class TicketModule {}
