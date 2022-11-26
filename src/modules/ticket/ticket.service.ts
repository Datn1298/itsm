import { Injectable } from "@nestjs/common";

@Injectable()
export class TicketService{

    getAllTicket(){
        return "get ticket";
    }

}