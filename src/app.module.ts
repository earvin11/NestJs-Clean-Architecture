import { Module } from '@nestjs/common';
import { PlayerModule } from './players/infraestructure/player.module';
import { WsServerModule } from './ws-server/infraestructure/ws-server.module';
import { BetModule } from './bets/infraestructure/bet.module';
import { ClientModule } from './clients/infraestructure/client.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './games/infraestructure/game.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    //MONGODB
    MongooseModule.forRoot('mongodb://localhost:27017/sprintRacesDb', {
      dbName: 'sprintRacesDb',
    }),
    // POSTGRESQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    PlayerModule,
    WsServerModule,
    BetModule,
    ClientModule,
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
