import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('photos')
export class PhotosEntity{
    @PrimaryGeneratedColumn("increment")
    id: number;  

    @Column()
    imageId: number;

    @Column()
    userId: number;

    @Column()
    order: number;

    @Column()
    imageUrl: string;
}