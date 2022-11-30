import { Module } from '@nestjs/common';
import { DowntimeService } from './downtime.service';
import { DowntimeController } from './downtime.controller';
import { Downtime } from '../models/downtime.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DowntimeController],
  providers: [DowntimeService],
  imports: [TypeOrmModule.forFeature([Downtime])]
})
export class DowntimeModule {}
