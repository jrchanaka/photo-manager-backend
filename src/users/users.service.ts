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
    getUserInfo(id: string): UserResponse {
        const user: UserResponse = MOCKED_DATA.author;

        if (user.id !== id) {
            throw new HttpException(VALIDATION.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        else {
            return user;
        }
    }
}
