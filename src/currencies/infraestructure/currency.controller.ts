import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CurrencyUseCases } from '../application/currency.use-cases';
import { CurrencyEntity } from '../domain/currency.entity';
import { CreateCurrencyDto } from './dtos/create-currency.dto';

@Controller('currencies')
export class CurrencyController {
  constructor(private readonly currencyUseCases: CurrencyUseCases) {}

  @Post()
  async create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return await this.currencyUseCases.create(createCurrencyDto);
  }
  @Get()
  async findAll() {
    return await this.currencyUseCases.findAll();
  }
  @Get('uuid')
  async findByUuid(@Param('uuid') uuid: string) {
    return await this.currencyUseCases.findByUuid(uuid);
  }
  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() data: Partial<CurrencyEntity>,
  ) {
    return await this.currencyUseCases.update(uuid, data);
  }
  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    return await this.currencyUseCases.remove(uuid);
  }
}
