import { ApiProperty } from '@nestjs/swagger';
import { Company } from '../entities/company.entity';
import { Image } from 'src/images/entities/image.entity';
import { BusinessSector } from 'src/business_sectors/entities/business_sector.entity';

export class CompanyDto {
  @ApiProperty()
  id: number;
  @ApiProperty({ example: 'companyName' })
  name: string;
  @ApiProperty({ example: 'companyLogo' })
  logo: Image;
  @ApiProperty({ example: 'companyAddress' })
  address: string;
  @ApiProperty({ example: 'companyCity' })
  city: string;
  @ApiProperty({ example: 'companyZipCode' })
  zipCode: string;
  @ApiProperty({ example: 'companySiret' })
  siret: string;
  @ApiProperty({ example: 'companyEmployees' })
  employees: number;
  @ApiProperty({ example: 'companyBusinessSector' })
  businessSector: BusinessSector;
  @ApiProperty({ example: '0000000000' })
  phone: string;
  @ApiProperty()
  createdAt: Date;

  constructor(value: Company) {
    this.id = value.id ?? 0;
    this.name = value.name ?? '';
    this.logo = value.logo ?? null;
    this.address = value.address ?? '';
    this.city = value.city ?? '';
    this.zipCode = value.zipCode ?? '';
    this.siret = value.siret ?? '';
    this.employees = value.employees ?? 0;
    this.businessSector = value.businessSector ?? null;
    this.phone = value.phone ?? '';
    this.createdAt = value.createdAt ?? new Date();
  }
}
