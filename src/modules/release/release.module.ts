import { Module } from '@nestjs/common';
import { ReleaseService } from './release.service';
import { ReleaseController } from './release.controller';
import { Release } from '../models/release.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ReleaseController],
  providers: [ReleaseService],
  imports: [TypeOrmModule.forFeature([Release])]
})
export class ReleaseModule {}
