import { Company } from 'src/companies/entities/company.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

type ImageProperties = Required<Image>;

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public location?: string;
  @ManyToOne(() => Company, (company) => company.images, { nullable: true })
  public company?: Company;

  public static fromProperties(value: ImageProperties): Image {
    const image = new Image();
    image.id = value.id;
    image.location = value.location;
    return image;
  }
}
