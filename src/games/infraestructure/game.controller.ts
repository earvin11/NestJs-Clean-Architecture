import { Body, Controller, Post } from '@nestjs/common';
import { GameUseCases } from '../application/game.use-cases';
import { CreateGameDto } from './create-game.dto';

@Controller('games')
export class GameController {
  constructor(private readonly gameUseCases: GameUseCases) {}

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    return await this.gameUseCases.create(createGameDto);
  }
}
