import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Release } from '../models/release.entity';

import { UpdateReleaseDto } from './dto/update-release.dto';

@Injectable()
export class ReleaseService {
  constructor(
    @InjectRepository(Release) private readonly rlRepository: Repository<Release>,
  ) {
  }

  create(createReleaseDto) {
    
    return this.rlRepository.save({
      ticket_id: createReleaseDto.ticket_id,
      start_date: createReleaseDto.start_date,
      end_date: createReleaseDto.end_date
    });
  }

  async findAll(): Promise<Release[]> {
    return this.rlRepository.find();
  }

  async findOneByTicketID(id: number): Promise<Release[]> {
    return this.rlRepository.find({
      where: {
        ticket_id : id,
      }
    });
  }

  update(id: number, updateReleaseDto: UpdateReleaseDto) {
    return `This action updates a #${id} release`;
  }

  remove(id: number) {
    return `This action removes a #${id} release`;
  }
}
