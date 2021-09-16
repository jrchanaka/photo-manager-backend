import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VALIDATION } from '../../src/config/const';
import { UsersService } from '../../src/users/users.service';
import { PhotosResponse } from './dtos/photos.response.dto';
import { SavePhotosDTO } from './dtos/savePhotos.dto';
import { PhotosEntity } from './entities/photos.entity';
import { PhotosService } from './photos.service';

const userId: string = "101";

const savePhotosMockRequest: SavePhotosDTO[] = [
  {
    userId: 101,
    imageId: 204900028,
    imageUrl: "https://placeimg.com/640/640/animals/204900028.jpeg",
    order: 1
  },
  {
    userId: 101,
    imageId: 204900029,
    imageUrl: "https://placeimg.com/640/640/animals/204900029.jpeg",
    order: 2
  }
];

const savePhotosMockResponse: PhotosEntity[] = [
  {
    id: 1,
    userId: 101,
    imageId: 204900028,
    imageUrl: "https://placeimg.com/640/640/animals/204900028.jpeg",
    order: 1
  },
  {
    id: 2,
    userId: 101,
    imageId: 204900029,
    imageUrl: "https://placeimg.com/640/640/animals/204900029.jpeg",
    order: 2
  }
];

describe('PhotosService', () => {
  let service: PhotosService;

  const mockPhotosRepository = {
    find: jest.fn().mockImplementation((userId: number) => Promise.resolve(savePhotosMockResponse)),
    save: jest.fn().mockImplementation((dto: SavePhotosDTO[]) => Promise.resolve(savePhotosMockResponse)),
    delete: jest.fn().mockImplementation((userId: number) => { Promise.resolve(true) }) 
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        PhotosService,
        {
          provide: getRepositoryToken(PhotosEntity),
          useValue: mockPhotosRepository
        }
      ],
    }).compile();

    service = module.get<PhotosService>(PhotosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return favorite photos list by user id', async () => {
    expect(await service.getSavedPhotosByUserId(userId)).toEqual(savePhotosMockResponse);
  });

  it('should save favorite photos list by user id', async () => {
    expect(await service.savePhotosByUserId(userId, savePhotosMockRequest)).toEqual(savePhotosMockResponse);
  });

  it('should throw an HTTP exception if user not found', () => {
    expect(() => { service.getPhotosByUserId("102") }).toThrow(new HttpException(VALIDATION.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
  });
});
