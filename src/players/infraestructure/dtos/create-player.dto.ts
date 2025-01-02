import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsPositive, IsString } from 'class-validator';
import { OperatorEntity } from 'src/operators/domain/operator.entity';

export class CreatePlayerDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  lastBalance: number;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  tokenWallet: string;

  @ApiProperty()
  @IsObject()
  operator: OperatorEntity;

  @ApiProperty()
  @IsString()
  operatorUuid: string;
}
