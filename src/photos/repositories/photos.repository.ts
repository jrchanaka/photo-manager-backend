import { Repository, EntityRepository } from "typeorm";
import { PhotosEntity } from "../entities/photos.entity";

@EntityRepository(PhotosEntity)
export class PhotosRepository extends Repository<PhotosEntity> {

}