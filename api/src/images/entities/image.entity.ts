import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type ImageProperties = Required<Image>;

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public location?: string;

  public static fromProperties(value: ImageProperties): Image {
    const image = new Image();
    image.id = value.id;
    image.location = value.location;
    return image;
  }
}
