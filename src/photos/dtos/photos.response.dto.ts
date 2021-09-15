import { HttpStatus } from "@nestjs/common";
import { IsNumber, IsString } from "class-validator";

export class PhotosResponse {

    @IsNumber()
    readonly id: number;

    @IsString()
    readonly message: string;

    @IsString()
    readonly picture: string;

    @IsString()
    readonly pictureSmall: string;

    @IsString()
    readonly pictureMedium: string;

    @IsString()
    readonly pictureStored: string;

    @IsNumber()
    readonly timestamp: number;

    constructor(
        id: number, 
        message: string, 
        picture: string, 
        pictureSmall: string, 
        pictureMedium: string, 
        pictureStored: string, 
        timestamp: number
        ) {
        this.id = id;
        this.message = message;
        this.picture = picture;
        this.pictureSmall = pictureSmall;
        this.pictureMedium = pictureMedium;
        this.pictureStored = pictureStored;
        this.timestamp = timestamp;
    }
}