import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerUseCases } from '../application/player.use-cases';
import { PlayerMemoryRepository } from './repositories/player-memory.repository';
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
    // PlayerMemoryRepository,
    {
      provide: PlayerRepository,
      useExisting: PlayerMongoRepository,
    },
  ],
  exports: [PlayerUseCases],
})
export class PlayerModule {}
