import { HttpStatus } from "@nestjs/common";
import { IsNumber, IsString } from "class-validator";

export class PhotosResponse {

    @IsNumber()
    readonly id: number;

    @IsString()
    readonly message: string;

    @IsString()
    readonly url: string;

    @IsNumber()
    readonly timestamp: number;

    constructor(id: number, message: string, url: string, timestamp: number) {
        this.id = id;
        this.message = message;
        this.url = url;
        this.timestamp = timestamp;
    }
}