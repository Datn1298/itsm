import { IsNotEmpty, Length } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    ticket_id: number;

    @IsNotEmpty()
    @Length(3)
    company: string;

    @IsNotEmpty()
    requester: string;
}