import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOperatorDto {
  @IsString()
  name: string;
  @IsString()
  clientUuid: string;
  @IsNumber()
  @IsPositive()
  minBet: number;
  @IsNumber()
  @IsPositive()
  maxBet: number;
  @IsString()
  endpointAuth: string;
  @IsString()
  endpointBet: string;
  @IsString()
  endpointWin: string;
  @IsString()
  endpointRollback: string;
  @IsString()
  casinoToken: string;
}
