import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type AddressProperties = Required<Address>;

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public name?: string;
  @Column()
  public address?: string;
  @Column()
  public city?: string;
  @Column()
  public zipCode?: string;
  @Column()
  public static fromProperties(value: AddressProperties): Address {
    const address = new Address();
    address.id = value.id;
    address.name = value.name;
    address.address = value.address;
    address.city = value.city;
    address.zipCode = value.zipCode;
    return address;
  }
}
