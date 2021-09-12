import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule, 
    PhotosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
