import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LaunchDataDto {
  @ApiProperty()
  @IsString()
  token: string;

  @ApiProperty()
  @IsString()
  operatorUuid: string;

  @ApiProperty()
  @IsString()
  casinoId: string;

  @ApiProperty()
  @IsString()
  casinoToken: string;
}
