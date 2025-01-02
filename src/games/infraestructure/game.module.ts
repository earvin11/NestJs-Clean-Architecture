import { Module } from '@nestjs/common';
import { GameMongoRepository } from './repositories/game.mongo-repository';
import { GameUseCases } from '../application/game.use-cases';
import { GameRepository } from '../domain/game.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModel, GameSchema } from './models/game.model';
import { GameController } from './game.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: GameModel.name,
        schema: GameSchema,
      },
    ]),
  ],
  controllers: [GameController],
  providers: [
    GameUseCases,
    GameMongoRepository,
    {
      provide: GameRepository,
      useExisting: GameMongoRepository,
    },
  ],
  exports: [GameRepository, GameUseCases],
})
export class GameModule {}
