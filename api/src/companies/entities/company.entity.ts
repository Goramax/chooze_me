import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from '../../images/entities/image.entity';
import { BusinessSector } from 'src/business_sectors/entities/business_sector.entity';
import { JobAd } from 'src/job_ad/entities/job_ad.entity';

type CompanyProperties = Required<Company>;
export enum State {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}

@Entity()
export class Company {
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
  public name?: string;

  @Column()
  public address?: string;

  @Column()
  public city?: string;

  @Column()
  public zipCode?: string;

  @Column()
  public siret?: string;

  @Column()
  public employees?: number;
  // image array for multiple images of the company
  @OneToMany(() => Image, (image) => image.company)
  public images?: Image[];

  @ManyToMany(() => BusinessSector)
  @JoinTable()
  public businessSectors?: BusinessSector[];

  @Column()
  public phone?: string;

  @OneToOne(() => Image)
  @JoinColumn()
  public logo?: Image;

  @OneToMany(() => JobAd, (jobAds) => jobAds.company)
  public jobAds?: JobAd[];

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

  public static fromProperties(value: CompanyProperties): Company {
    const company = new Company();
    company.id = value.id;
    company.login = value.login;
    company.email = value.email;
    company.name = value.name;
    company.address = value.address;
    company.city = value.city;
    company.zipCode = value.zipCode;
    company.siret = value.siret;
    company.employees = value.employees;
    company.phone = value.phone;
    company.logo = value.logo;
    company.password = value.password;
    company.salt = value.salt;
    company.state = value.state;
    company.createdAt = value.createdAt;
    company.updatedAt = value.updatedAt;
    company.businessSectors = value.businessSectors;
    return company;
  }
}
