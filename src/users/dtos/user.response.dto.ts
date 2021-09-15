import { HttpStatus } from "@nestjs/common";
import { IsNumber, IsString } from "class-validator";

export class UserResponse {

    @IsNumber()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsString()
    readonly picture: string;

    @IsString()
    readonly source: string;

    @IsString()
    readonly lang: string;

    @IsString()
    readonly country: string;

    @IsString()
    readonly sourceId: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly createdAt: string;
    
}