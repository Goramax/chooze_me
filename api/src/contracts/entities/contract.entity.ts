import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type ContractProperties = Required<Contract>;

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public name?: string;

  public static fromProperties(value: ContractProperties): Contract {
    const contract = new Contract();
    contract.id = value.id;
    contract.name = value.name;
    return contract;
  }
}
