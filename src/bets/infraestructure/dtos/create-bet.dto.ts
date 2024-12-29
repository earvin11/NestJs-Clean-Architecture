import { IsBoolean, IsNumber, IsObject, IsPositive, IsString, Min } from "class-validator";

export class CreateBetDto {
    @IsObject()
    bet: Record<string, any>;

    @IsString()
    playerUuid: string;

    @IsNumber()
    @IsPositive()
    @Min(1)
    totalAmount: number;

    @IsString()
    currencyUuid: string;

    @IsString()
    gameUuid: string;

    @IsBoolean()
    isPaid: boolean;
}