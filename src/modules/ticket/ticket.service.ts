import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from '../models/ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket) private readonly ticketRepository: Repository<Ticket>,
  ) {
  }
  
  create(createTicketDto: CreateTicketDto) {
    return this.ticketRepository.save(createTicketDto)
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }

  async findOneByTicketID(id: number): Promise<Ticket[]> {
    return this.ticketRepository.find({
      where: {
        ticket_id : id,
      }
    });
  }

  // async findOne(id: number): Promise<Ticket[]> {
  //   return this.ticketRepository.findOne(id)
  // }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
