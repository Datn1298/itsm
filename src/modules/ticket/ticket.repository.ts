import { Repository } from "typeorm";
import { Ticket } from "./ticket.entity";

@EntityRepository(Ticket)
export class TestRepository extends Repository<Ticket>{

}