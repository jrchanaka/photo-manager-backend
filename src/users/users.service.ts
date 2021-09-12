import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserResponse } from './dtos/user.response.dto';
import * as MOCKED_DATA from '../data/photos.data.json';
import { VALIDATION } from 'src/config/const';

@Injectable()
export class UsersService {
    /**
     * Get user info
     * @param id 
     */
    async getUserInfo(id: string): Promise<UserResponse> {
        const user: any = MOCKED_DATA.author;

        if (user.id === id) {
            const userResponse = new UserResponse (
                user.id,
                user.name,
                user.picture,
                user.source,
                user.lang,
                user.country,
                user.sourceId,
                user.email
            );

            return userResponse;
        }
        else {
            throw new HttpException(VALIDATION.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }
}
