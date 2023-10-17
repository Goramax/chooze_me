import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'choozeme',
      password: 'Ch00z3m3',
      database: 'choozeme',
      entities: [User],
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
  constructor(private dataSource: DataSource) {}
}
