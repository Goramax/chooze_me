import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from '../../images/entities/image.entity';
import { BusinessSector } from 'src/business_sectors/entities/business_sector.entity';

type UserProperties = Required<User>;
export enum State {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({
    unique: true,
  })
  public login?: string;

  @Column({
    unique: true,
  })
  public email?: string;
  @Column()
  public firstName?: string;

  @Column()
  public lastName?: string;

  @Column()
  public address?: string;

  @Column()
  public city?: string;

  @Column()
  public zipCode?: string;

  @Column({ nullable: true })
  public birthDate?: Date;

  @Column()
  public cv?: string;

  @OneToOne(() => Image)
  @JoinColumn()
  public image?: Image;

  @Column()
  public phone?: string;

  @ManyToMany(() => BusinessSector)
  @JoinTable()
  public businessSectors?: BusinessSector[];

  @Column()
  public password?: string;

  @Column()
  public salt?: string;

  @Column({
    type: 'enum',
    enum: State,
    default: State.ACTIVE,
  })
  public state: State = State.ACTIVE;

  @Column()
  public createdAt: Date = new Date();

  @Column()
  public updatedAt: Date = new Date();

  public static fromProperties(value: UserProperties): User {
    const user = new User();
    user.id = value.id;
    user.login = value.login;
    user.email = value.email;
    user.firstName = value.firstName;
    user.lastName = value.lastName;
    user.address = value.address;
    user.city = value.city;
    user.zipCode = value.zipCode;
    user.birthDate = value.birthDate;
    user.cv = value.cv;
    user.image = value.image;
    user.phone = value.phone;
    user.businessSectors = value.businessSectors;
    user.password = value.password;
    user.salt = value.salt;
    user.state = value.state;
    user.createdAt = value.createdAt;
    user.updatedAt = value.updatedAt;
    return user;
  }
}
