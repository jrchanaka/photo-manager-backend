import { Test, TestingModule } from '@nestjs/testing';
import { UserResponse } from './dtos/user.response.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const userMockObject: UserResponse = {
  id: "101",
  name: "Jackie Chan",
  firstName: "Jakie",
  lastName: "Chan",
  country: "China",
  email: "jackiechan@gmail.com",
  lang: "chi",
  source: "Facebook",
  sourceId: "12404375",
  picture: "https://placeimg.com/640/640/people",
  createdAt: "2021-09-15 23:15:53"
};

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    getUserInfo: jest.fn((userId: number) => { return userMockObject })
  };  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService]
    })
    .overrideProvider(UsersService)
    .useValue(mockUsersService)
    .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  it('should return user by user id', () => {
    const userId: string = "101";
    expect(controller.getUserInfo(userId)).toEqual(userMockObject);
    expect(mockUsersService.getUserInfo).toHaveBeenCalledWith(userId);
  });

  it('should should throw error if user not found', () => {
    const userId: string = "102";
    expect(controller.getUserInfo(userId)).toEqual(userMockObject);
    expect(mockUsersService.getUserInfo).toHaveBeenCalledWith(userId);
  });
});
