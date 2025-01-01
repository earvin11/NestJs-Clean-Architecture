import { IsString } from "class-validator";

export class LaunchDataDto {
    @IsString()
    token: string;
    @IsString()
    operatorUuid: string;
    @IsString()
    casinoId: string;
    @IsString()
    casinoToken: string;
}