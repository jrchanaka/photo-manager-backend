import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { COMMON_MESSAGES, VALIDATION } from 'src/config/const';
import * as MOCKED_DATA from '../data/photos.data.json';
import { PhotosResponse } from './dtos/photos.response.dto';
import { SavePhotosDTO } from './dtos/savePhotos.dto';
import { PhotosEntity } from './entities/photos.entity';
import { PhotosRepository } from './repositories/photos.repository';
import { sortBy } from 'lodash';
import { UsersService } from 'src/users/users.service';
import { UserResponse } from 'src/users/dtos/user.response.dto';

@Injectable()
export class PhotosService {

    /**
     * @param photosRepository 
     */
    constructor(
        @InjectRepository(PhotosEntity)
        private readonly photosRepository: PhotosRepository,
        private usersService: UsersService
        ) {}

    /**
     * Get photos list of the user
     * @param userId 
     */
    async getPhotosByUserId(userId: string): Promise<PhotosResponse[]> {
        const user: UserResponse = this.usersService.getUserInfo(userId);

        if (!user) {
            throw new HttpException(VALIDATION.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        const entries: any = MOCKED_DATA.entries;
        const photoResponse: PhotosResponse[] = [];

        entries.map((entry) => {
            photoResponse.push(
                new PhotosResponse(
                    entry.id, 
                    entry.message, 
                    entry.picture, 
                    entry.pictureSmall, 
                    entry.pictureMedium, 
                    entry.pictureStored, 
                    entry.timestamp
                )
            );
        });

        return photoResponse;
    }

    /**
     * Save photos list of the user
     * @param userId 
     */
    async savePhotosByUserId(userId: string, photoData: SavePhotosDTO[]): Promise<any> {
        try {
            // Sort acending order by order parameter
            const orderedPhotoList: SavePhotosDTO[] = sortBy(photoData, ['order']);

            await this.photosRepository.delete({ userId: Number(userId) });
            return await this.photosRepository.save(orderedPhotoList);
        } catch (error) {
            throw new HttpException(COMMON_MESSAGES.INTERNAL_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);        
        }
    }

    /**
     * Get photos list of the user
     * @param userId 
     */
     async getSavedPhotosByUserId(userId: string): Promise<any> {
        try {
            return await this.photosRepository.find({ userId: Number(userId) });
        } catch (error) {
            throw new HttpException(COMMON_MESSAGES.INTERNAL_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);       
        }
    }
}
