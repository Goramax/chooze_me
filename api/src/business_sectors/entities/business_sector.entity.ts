import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type BusinessSectorProperties = Required<BusinessSector>;

@Entity()
export class BusinessSector {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public name?: string;

  public static fromProperties(
    value: BusinessSectorProperties,
  ): BusinessSector {
    const businessSector = new BusinessSector();
    businessSector.id = value.id;
    businessSector.name = value.name;
    return businessSector;
  }
}
