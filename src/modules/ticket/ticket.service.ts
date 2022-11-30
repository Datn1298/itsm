import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// import { TicketRepository } from "./ticket.repository"
import { CreateTicketDto } from "./dto/createTicket.dto"
import { Repository } from "typeorm";
import { Ticket } from "../models/ticket.entity";

@Injectable()
export class TicketService{
    getAllTicket(){
        return "get ticket";
    }

    async createNewTicket(ticket: CreateTicketDto){
        return 'create ticket'
    }

}