import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencyModel, CurrencySchema } from './models/currency.model';
import { CurrencyUseCases } from '../application/currency.use-cases';
import { CurrencyMongoRepository } from './repositories/currency.mongo-repository';
import { CurrencyRepository } from '../domain/currency.repository';

@Module({
  providers: [
    CurrencyUseCases,
    CurrencyMongoRepository,
    {
      provide: CurrencyRepository,
      useExisting: CurrencyMongoRepository,
    },
  ],
  exports: [CurrencyUseCases],
  imports: [
    MongooseModule.forFeature([
      {
        name: CurrencyModel.name,
        schema: CurrencySchema,
      },
    ]),
  ],
  controllers: [CurrencyController],
})
export class CurrencyModule {}
