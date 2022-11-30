import { IsNotEmpty, Length } from "class-validator";

export class CreateDowntimeDto {
    @IsNotEmpty()
    ticket_id: number;

    @IsNotEmpty()
    start_date: string;

    @IsNotEmpty()
    end_date: string
}