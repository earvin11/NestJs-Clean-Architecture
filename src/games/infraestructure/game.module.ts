import { Module } from '@nestjs/common';
import { GameMongoRepository } from './repositories/game.mongo-repository';
import { GameUseCases } from '../application/game.use-cases';
import { GameRepository } from '../domain/game.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModel, GameSchema } from './models/game.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: GameModel.name,
        schema: GameSchema,
      },
    ]),
  ],
  providers: [
    GameMongoRepository,
    GameUseCases,
    {
      provide: GameRepository,
      useExisting: GameMongoRepository,
    },
  ],
  exports: [GameUseCases],
})
export class GameModule {}