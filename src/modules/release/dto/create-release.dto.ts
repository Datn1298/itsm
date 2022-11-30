import { IsNotEmpty, Length } from "class-validator";

export class CreateReleaseDto {

    @IsNotEmpty()
    ticket_id: number;

    @IsNotEmpty()
    @Length(3)
    company: string;

    @IsNotEmpty()
    requester: string
}
