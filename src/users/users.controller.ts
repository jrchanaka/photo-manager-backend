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
    async getUserInfo(@Param('id') id: string): Promise<UserResponse> {
        return await this.usersService.getUserInfo(id);        
    }

}
