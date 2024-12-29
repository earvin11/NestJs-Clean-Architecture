import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsNumber()
  @IsPositive()
  balance: number;

  @IsString()
  username: string;
}
