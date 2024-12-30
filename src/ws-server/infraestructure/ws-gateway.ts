import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Server, Socket } from 'socket.io';
import { BetUseCases } from 'src/bets/application/bet.use-cases';
import { CreateBetDto } from 'src/bets/infraestructure/dtos/create-bet.dto';
import { parsedErrorsDtos } from 'src/shared/helpers/parsed-errors-dto.helper';

@WebSocketGateway()
export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly betUseCases: BetUseCases) {}

  @WebSocketServer()
  server: Server;

  handleDisconnect(client: Socket) {
    console.log('Client disconnect', client.id);
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log('Client online', client.id);
  }

  @SubscribeMessage('bets')
  async handleBet(@MessageBody() data: any) {
    // Convertir los datos recibidos a una instancia del DTO
    const bet = plainToClass(CreateBetDto, data);
    // Validar los datos usando class-validator
    const errors = await validate(bet);

    if (errors.length > 0) {
      const errorsParsed = parsedErrorsDtos(errors);
      this.server.emit('betError', errorsParsed);
      return;
    }

    const resp = await this.betUseCases.create(bet);
    this.server.emit('betsResponse', resp);
  }
}
