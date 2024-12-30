import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OperatorUseCases } from '../application/operator.use-cases';
import { CreateOperatorDto } from './dto/create-operator.dto';
import { UpdateOperatorDto } from './dto/update-operator.dto';

@Controller('operators')
export class OperatorController {
  constructor(private readonly operatorUseCases: OperatorUseCases) {}

  @Post()
  async create(@Body() createOperatorDto: CreateOperatorDto) {
    return await this.operatorUseCases.create(createOperatorDto);
  }
  @Get()
  async findAll() {
    return await this.operatorUseCases.findAll();
  }
  @Get('uuid')
  async findByUuid(@Param('uuid') uuid: string) {
    return await this.operatorUseCases.findByUuid(uuid);
  }
  @Patch('uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateOperatorDto: UpdateOperatorDto,
  ) {
    return await this.operatorUseCases.update(uuid, updateOperatorDto);
  }
  @Delete('uuid')
  async remove(@Param('uuid') uuid: string) {
    return await this.operatorUseCases.remove(uuid);
  }
}
