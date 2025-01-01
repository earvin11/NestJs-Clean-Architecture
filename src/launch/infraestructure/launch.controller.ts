import { Body, Controller, Post } from "@nestjs/common";
import { LaunchData, LaunchUseCases } from "../application/launch.use-cases";
import { LaunchDataDto } from "./dtos/launch-data.dto";

@Controller('launch')
export class LaunchController {
    constructor(
        private readonly launchUseCases: LaunchUseCases
    ) {}

    @Post('/')
    async launch(@Body()launchDataDto: LaunchDataDto) {
        return await this.launchUseCases.launch(launchDataDto);
    }
}