import { Module } from '@nestjs/common';
import { BetUseCases } from '../application/bet.use-cases';
import { BetRepository } from '../domain/bet.repository';
import { BetMongoRepository } from './repositories/bet.mongo-repository';
import { MongooseModule } from '@nestjs/mongoose';
import { BetModel, BetSchema } from './models/bet.model';
import { RoundModule } from 'src/rounds/infraestructure/round.module';
import { GameModule } from 'src/games/infraestructure/game.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BetModel.name,
        schema: BetSchema,
      },
    ]),
    // RoundModule,
    GameModule,
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
