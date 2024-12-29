import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayerUseCases } from '../application/player.use-cases';
import { CreatePlayerDto } from './dtos/create-player.dto';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerUseCases: PlayerUseCases) {}

  @Post()
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    return await this.playerUseCases.create(createPlayerDto);
  }

  @Get()
  async findAll() {
    return await this.playerUseCases.findAll();
  }
}
