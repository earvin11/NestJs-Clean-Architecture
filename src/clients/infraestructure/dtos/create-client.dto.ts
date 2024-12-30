import { IsString, MinLength } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  endpointAuth: string;

  @IsString()
  endpointRollback: string;

  @IsString()
  endpointBet: string;

  @IsString()
  endpointWin: string;

  @IsString()
  logo?: string;

  @IsString()
  loaderLogo?: string;
}