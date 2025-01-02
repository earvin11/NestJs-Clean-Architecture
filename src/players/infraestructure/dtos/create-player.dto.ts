import { IsNumber, IsObject, IsPositive, IsString } from 'class-validator';
import { OperatorEntity } from 'src/operators/domain/operator.entity';

export class CreatePlayerDto {
  @IsNumber()
  @IsPositive()
  lastBalance: number;

  @IsString()
  username: string;

  @IsString()
  userId: string;

  @IsString()
  tokenWallet: string;

  @IsObject()
  operator: OperatorEntity;

  @IsString()
  operatorUuid: string;
}
