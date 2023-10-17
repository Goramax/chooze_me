import { Address } from 'src/addresses/entities/address.entity';
import { BusinessSector } from 'src/business_sectors/entities/business_sector.entity';
import { Contract } from 'src/contracts/entities/contract.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

type JobAdProperties = Required<JobAd>;
export enum Type {
  FULL = 'Temps plein',
  PART = 'Temps partiel',
}

@Entity()
export class JobAd {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public title?: string;

  @Column()
  public description?: string;

  @ManyToOne(() => BusinessSector, (businessSector) => businessSector.id)
  public businessSector?: BusinessSector;

  @ManyToOne(() => Contract, (contract) => contract.id)
  public contract?: Contract;

  @ManyToOne(() => Address, (address) => address.id)
  public location?: Address;

  @Column({
    type: 'enum',
    enum: Type,
    default: Type.FULL,
  })
  public type?: Type = Type.FULL;

  @Column()
  public salary?: string;

  @Column()
  state?: string;

  public static fromProperties(value: JobAdProperties): JobAd {
    const jobAd = new JobAd();
    jobAd.id = value.id;
    jobAd.title = value.title;
    jobAd.description = value.description;
    jobAd.businessSector = value.businessSector;
    jobAd.contract = value.contract;
    jobAd.location = value.location;
    jobAd.type = value.type;
    jobAd.salary = value.salary;
    jobAd.state = value.state;
    return jobAd;
  }
}
