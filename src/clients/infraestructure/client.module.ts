import { Module } from '@nestjs/common';
import { ClientUseCases } from '../application/client.use-cases';
import { ClientController } from './client.controller';
import { ClientRepository } from '../domain/client.repository';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Client } from './entities/client';
// import { ClientPgRepository } from './repositories/client.pg-repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema, ClientModel } from './models/client.model';
import { ClientMongoRepository } from './repositories/client.mongo-repository';

@Module({
  controllers: [ClientController],
  providers: [
    ClientUseCases,
    ClientMongoRepository,
    // ClientPgRepository,
    {
      provide: ClientRepository,
      useExisting: ClientMongoRepository,
    },
  ],
  imports: [
    // TypeOrmModule.forFeature([Client]),
    MongooseModule.forFeature([
      {
        name: ClientModel.name,
        schema: ClientSchema,
      },
    ]),
  ],
  exports: [ClientRepository, ClientUseCases],
})
export class ClientModule {}
