import { Body, Controller, Post } from '@nestjs/common';
import { ClientUseCases } from '../applicacion/client.use-cases';
import { CreateClientDto } from './create-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientUseCases: ClientUseCases) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return await this.clientUseCases.create(createClientDto);
  }
}
