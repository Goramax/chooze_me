import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column()
  public phone?: string;
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
    company.password = value.password;
    company.salt = value.salt;
    company.state = value.state;
    company.createdAt = value.createdAt;
    company.updatedAt = value.updatedAt;
    return company;
  }
}
