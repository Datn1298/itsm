import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidationTypes } from 'class-validator';
import { CreateTicketDto } from './dto/createTicket.dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {

	constructor(private ticketService: TicketService){}


	@Get('/')
	getTicket(){
		return this.ticketService.getAllTicket();
	}

	@Post('/create')
	@HttpCode(200)
	@UsePipes(ValidationPipe)
	createTicket(@Body() ticketData: CreateTicketDto){
		return {'data': ticketData}
	}
}
