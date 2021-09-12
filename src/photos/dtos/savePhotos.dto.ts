import { HttpStatus } from "@nestjs/common";
import { IsNumber, IsString } from "class-validator";

export class SavePhotosDTO {

    @IsNumber()
    readonly userId: number;

    @IsNumber()
    readonly imageId: number;

    @IsString()
    readonly imageUrl: string;

    @IsNumber()
    readonly order: number;
}