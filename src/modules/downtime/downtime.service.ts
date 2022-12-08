import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, getConnection, Repository } from 'typeorm';
// import { CreateDowntimeDto } from './dto/create-downtime.dto';
// import { UpdateDowntimeDto } from './dto/update-downtime.dto';
import { Downtime } from "src/modules/models/downtime.entity";

@Injectable()
export class DowntimeService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Downtime) private readonly dtRepository: Repository<Downtime>,
  ) {
  }

        
  create(createDowntimeDto) {
    let max = 0;
    let min = 0;

    createDowntimeDto.services.forEach((element,index) => {
      if(this.convertStringtoTime(element.end_date)>max){
        max=this.convertStringtoTime(element.end_date)/1000
      }
      if(index==0){
        min=this.convertStringtoTime(element.start_date)/1000
      }
      if(this.convertStringtoTime(element.start_date)<min){
        min=this.convertStringtoTime(element.start_date)/1000
      }
    });
    return this.dtRepository.save({
      start_date: min,
      end_date: max,
      ticket_id: createDowntimeDto.ticket_id
    })

  }

  async findAll(): Promise<Downtime[]> {
    return this.dtRepository.find();
  }

  async findOneByTicketID(id: number): Promise<Downtime[]> {
    return this.dtRepository.find({
      where: {
        ticket_id : id,
      }
    });
  }

  convertStringtoTime(str: string){
    let [dateRelated, timeRelated] = str.split(' ');
    let [day, month, year] = dateRelated.split('/');
    let [hours, minutes, seconds] = timeRelated.split(':');

    const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds).getTime();

    return date;
  }
}
