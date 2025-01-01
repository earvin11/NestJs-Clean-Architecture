import { Body, Post } from "@nestjs/common";
import { LaunchData, LaunchUseCases } from "../application/launch.use-cases";

export class LaunchController {
    constructor(
        private readonly launchUseCases: LaunchUseCases
    ) {}

    @Post('/')
    async launch(@Body()launchData: LaunchData) {
        return await this.launchUseCases.launch(launchData);
    }
}