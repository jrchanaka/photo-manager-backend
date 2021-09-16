import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { PhotosResponse } from './dtos/photos.response.dto';
import * as MOCKED_DATA from '../data/photos.data.json';
import { PhotosService } from './photos.service';
import { SavePhotosDTO } from './dtos/savePhotos.dto';
import { PhotosEntity } from './entities/photos.entity';

@Controller('photos')
export class PhotosController {

    /**
     * Constructor
     * @param photosService 
     */
     constructor(private photosService: PhotosService) {}

    @Get('/:userId')
    getPhotosByUserId(@Param('userId') userId: string): PhotosResponse[] {
        return this.photosService.getPhotosByUserId(userId);
    }

    @Post('/:userId')
    async savePhotosByUserId(@Param('userId') userId: string, @Body() photoData: SavePhotosDTO[]): Promise<PhotosEntity[]> {
        return await this.photosService.savePhotosByUserId(userId, photoData);
    }

    @Get('/saved-list/:userId')
    async getSavedPhotosByUserId(@Param('userId') userId: string): Promise<PhotosEntity[]> {
        return await this.photosService.getSavedPhotosByUserId(userId);
    }
}
