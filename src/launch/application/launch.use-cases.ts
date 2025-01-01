import { ClientRepository } from "src/clients/domain/client.repository";
import { OperatorRepository } from "src/operators/domain/operator.repository";
import { Injectable } from "src/shared/dependency-injection/injectable";


export interface LaunchData {
    token: string;
    operatorUuid: string;
    casinoId: string;
    casinoToken: string;
}

@Injectable()
export class LaunchUseCases {
    constructor(
        private readonly operatorRepository: OperatorRepository,
        private readonly clientRepository: ClientRepository
    ) {}

    public async launch(launchData: LaunchData) {
        const operator = await this.operatorRepository.findByUuid(launchData.operatorUuid);
        //TODO:
        if(!operator) return;

        const client = await this.clientRepository.findByUuid(operator.clientUuid);
        //TODO:
        if(!client) return;

        
    }
}