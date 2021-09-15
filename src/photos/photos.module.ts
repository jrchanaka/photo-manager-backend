import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { PhotosEntity } from './entities/photos.entity';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotosEntity])],
  controllers: [PhotosController],
  providers: [PhotosService, UsersService]
})
export class PhotosModule {}
