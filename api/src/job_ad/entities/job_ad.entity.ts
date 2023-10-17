import { Address } from 'src/addresses/entities/address.entity';
import { BusinessSector } from 'src/business_sectors/entities/business_sector.entity';
import { Contract } from 'src/contracts/entities/contract.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type JobAdProperties = Required<JobAd>;

@Entity()
export class JobAd {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public title?: string;
  @Column()
  public description?: string;
  @Column()
  public type?: Contract;
  @Column()
  public businessSector?: BusinessSector;
  @Column()
  public location?: Address;
  @Column()
  public salary?: string;
  @Column()
  state?: string;

  public static fromProperties(value: JobAdProperties): JobAd {
    const jobAd = new JobAd();
    jobAd.id = value.id;
    jobAd.title = value.title;
    jobAd.description = value.description;
    jobAd.type = value.type;
    jobAd.businessSector = value.businessSector;
    jobAd.location = value.location;
    jobAd.salary = value.salary;
    jobAd.state = value.state;
    return jobAd;
  }
}
