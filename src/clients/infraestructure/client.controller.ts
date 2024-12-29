import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientUseCases } from '../application/client.use-cases';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientUseCases: ClientUseCases) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return await this.clientUseCases.create(createClientDto);
  }

  @Get()
  async findAll() {
    return await this.clientUseCases.findAll();
  }

  @Get('uuid')
  async findByUuid(@Param('uuid') uuid: string) {
    return await this.clientUseCases.findByUuid(uuid);
  }

  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return await this.clientUseCases.update(uuid, updateClientDto);
  }

  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    return await this.clientUseCases.remove(uuid);
  }
}
