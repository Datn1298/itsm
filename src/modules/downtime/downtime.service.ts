import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDowntimeDto } from './dto/create-downtime.dto';
import { UpdateDowntimeDto } from './dto/update-downtime.dto';
import { Downtime } from "src/modules/models/downtime.entity";

@Injectable()
export class DowntimeService {

  constructor(
    @InjectRepository(Downtime) private readonly dtRepository: Repository<Downtime>,
  ) {
  }

        
  create(createDowntimeDto: CreateDowntimeDto) {
    return this.dtRepository.create(createDowntimeDto);
  }

  async findAll(): Promise<Downtime[]> {
    return this.dtRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} downtime`;
  }

  update(id: number, updateDowntimeDto: UpdateDowntimeDto) {
    return `This action updates a #${id} downtime`;
  }

  remove(id: number) {
    return `This action removes a #${id} downtime`;
  }
}
