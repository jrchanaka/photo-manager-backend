import { HttpStatus } from "@nestjs/common";
import { IsNumber, IsString } from "class-validator";

export class UserResponse {

    @IsNumber()
    readonly id: number;

    @IsString()
    readonly name: string;

    @IsString()
    readonly profiePicture: string;

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

    constructor(
        id: number, 
        name: string, 
        profiePicture: string, 
        source: string, 
        lang: string, 
        country: string, 
        sourceId: string, 
        email: string
        ) {
        this.id = id;
        this.name = name;
        this.profiePicture = profiePicture;
        this.source = source;
        this.lang = lang;
        this.country = country;
        this.sourceId = sourceId;
        this.email = email;
    }
}