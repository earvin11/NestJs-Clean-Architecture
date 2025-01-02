import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerUseCases } from '../application/player.use-cases';
import { PlayerRepository } from '../domain/player.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './models/player';
import { PlayerMongoRepository } from './repositories/player.mongo-repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  ],
  controllers: [PlayerController],
  providers: [
    PlayerUseCases,
    PlayerMongoRepository,
    {
      provide: PlayerRepository,
      useExisting: PlayerMongoRepository,
    },
  ],
  exports: [PlayerRepository, PlayerUseCases],
})
export class PlayerModule {}
