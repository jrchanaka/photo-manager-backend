import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../src/users/users.service';
import { PhotosResponse } from './dtos/photos.response.dto';
import { SavePhotosDTO } from './dtos/savePhotos.dto';
import { PhotosEntity } from './entities/photos.entity';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

const userId: string = "101";

const photoListMockData: PhotosResponse[] = [
  {
    id: 204900001,
    message: "",
    picture: "https://placeimg.com/640/640/animals",
    pictureMedium: "",
    pictureSmall: "",
    pictureStored: "",
    timestamp: 1578391381
  },
  {
    id: 204900002,
    message: "",
    picture: "https://placeimg.com/640/640/arch",
    pictureMedium: "",
    pictureSmall: "",
    pictureStored: "",
    timestamp: 1578391381
  }
];

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

describe('PhotosController', () => {
  let controller: PhotosController;

  const mockPhotosService = {
    getPhotosByUserId: jest.fn((userId: number) => { return photoListMockData }),
    savePhotosByUserId: jest.fn((dto: SavePhotosDTO[]) => { return savePhotosMockResponse }),
    getSavedPhotosByUserId: jest.fn((userId: number) => { return savePhotosMockResponse }),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotosController],
      providers: [PhotosService, UsersService]
    })
    .overrideProvider(PhotosService)
    .useValue(mockPhotosService)
    .compile();

    controller = module.get<PhotosController>(PhotosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all the photos list by user id', () => {
    expect(controller.getPhotosByUserId(userId)).toEqual(photoListMockData);
    expect(mockPhotosService.getPhotosByUserId).toHaveBeenCalledWith(userId);
  });

  it('should save favorite photo list by user id', () => {
    expect(controller.savePhotosByUserId(userId, savePhotosMockRequest)).resolves.toEqual(savePhotosMockResponse);
    expect(mockPhotosService.savePhotosByUserId).toHaveBeenCalledWith(userId, savePhotosMockRequest);
  });

  it('should return favorite photo list by user id', () => {
    expect(controller.getSavedPhotosByUserId(userId)).resolves.toEqual(savePhotosMockResponse);
    expect(mockPhotosService.getSavedPhotosByUserId).toHaveBeenCalledWith(userId);
  });
});
