import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { UserResponse } from './dtos/user.response.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    /**
     * Constructor
     * @param usersService 
     */
     constructor(private usersService: UsersService) {}

    @Get('/:id')
    getUserInfo(@Param('id') id: string): UserResponse {
        return this.usersService.getUserInfo(id);        
    }

}
