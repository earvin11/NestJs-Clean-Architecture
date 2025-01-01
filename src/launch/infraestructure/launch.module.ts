import { Module } from "@nestjs/common";
import { LaunchUseCases } from "../application/launch.use-cases";
import { LaunchController } from "./launch.controller";
import { OperatorModule } from "src/operators/infraestructure/operator.module";
import { ClientModule } from "src/clients/infraestructure/client.module";

@Module({
    providers: [
        LaunchUseCases
    ],
    controllers: [
        LaunchController
    ],
    imports: [
        OperatorModule,
        ClientModule
    ]
})
export class LaunchModule {}