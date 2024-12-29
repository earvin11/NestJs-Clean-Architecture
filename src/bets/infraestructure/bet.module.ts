import { Module } from '@nestjs/common';
import { BetUseCases } from '../application/bet.use-cases';
import { BetRepository } from '../domain/bet.repository';
import { BetMongoRepository } from './repositories/bet.mongo-repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Bet, BetSchema } from './models/bet.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Bet.name,
        schema: BetSchema,
      },
    ]),
  ],
  providers: [
    BetUseCases,
    BetMongoRepository,
    {
      provide: BetRepository,
      useExisting: BetMongoRepository,
    },
  ],
  exports: [BetUseCases],
})
export class BetModule {}
