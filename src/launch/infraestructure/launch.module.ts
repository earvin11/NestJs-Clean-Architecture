import { Module } from '@nestjs/common';
import { LaunchUseCases } from '../application/launch.use-cases';
import { LaunchController } from './launch.controller';
import { OperatorModule } from 'src/operators/infraestructure/operator.module';
import { ClientModule } from 'src/clients/infraestructure/client.module';
import { CurrencyModule } from 'src/currencies/infraestructure/currency.module';
import { PlayerModule } from 'src/players/infraestructure/player.module';
import { GameModule } from 'src/games/infraestructure/game.module';

@Module({
  providers: [LaunchUseCases],
  controllers: [LaunchController],
  imports: [
    ClientModule,
    CurrencyModule,
    GameModule,
    OperatorModule,
    PlayerModule,
  ],
})
export class LaunchModule {}
