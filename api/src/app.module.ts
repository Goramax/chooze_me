import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { Company } from './companies/entities/company.entity';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { AddressesModule } from './addresses/addresses.module';
import { BusinessSectorsController } from './business_sectors/business_sectors.controller';
import { BusinessSectorsService } from './business_sectors/business_sectors.service';
import { BusinessSectorsModule } from './business_sectors/business_sectors.module';
import { JobAdModule } from './job_ad/job_ad.module';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesModule } from './messages/messages.module';
import { ImagesModule } from './images/images.module';
import { ContractsController } from './contracts/contracts.controller';
import { ContractsService } from './contracts/contracts.service';
import { ContractsModule } from './contracts/contracts.module';
import { Message } from './messages/entities/message.entity';
import { Address } from './addresses/entities/address.entity';
import { Image } from './images/entities/image.entity';
import { JobAd } from './job_ad/entities/job_ad.entity';
import { BusinessSector } from './business_sectors/entities/business_sector.entity';
import { Contract } from './contracts/entities/contract.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'choozeme',
      password: 'Ch00z3m3',
      database: 'choozeme',
      entities: [
        User,
        Company,
        Message,
        Image,
        Address,
        JobAd,
        BusinessSector,
        Contract,
      ],
      synchronize: true, // passer à false en production
    }),
    UsersModule,
    CompaniesModule,
    AddressesModule,
    BusinessSectorsModule,
    JobAdModule,
    MessagesModule,
    ImagesModule,
    ContractsModule,
  ],
  controllers: [
    AppController,
    BusinessSectorsController,
    MessagesController,
    ContractsController,
  ],
  providers: [
    AppService,
    BusinessSectorsService,
    MessagesService,
    ContractsService,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    const contract1 = new Contract();
    contract1.id = 1;
    contract1.name = 'CDD';
    const contract2 = new Contract();
    contract2.id = 2;
    contract2.name = 'Alternance';
    const contract3 = new Contract();
    contract3.id = 3;
    contract3.name = 'Stage';
    dataSource.manager.save([contract1, contract2, contract3]);
  }
}
