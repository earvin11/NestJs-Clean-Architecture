import { ClientRepository } from "src/clients/domain/client.repository";
import { CurrencyRepository } from "src/currencies/domain/currency.repository";
import { OperatorRepository } from "src/operators/domain/operator.repository";
import { Injectable } from "src/shared/dependency-injection/injectable";
import { loginPllayerInWallet } from "src/shared/helpers/requests-wallet.helpers";


export interface LaunchData {
    token: string;
    operatorUuid: string;
    casinoId: string;
    casinoToken: string;
}

export interface ErrorLaunch {
    status: number;
    message: string;
  }
  
  export interface ExitoLaunch {
    status: number;
    message: string;
    minBet: number;
    maxBet: number;
    casino: any;
    chips: any;
    player: any;
    operator: any;
    currency: any;
  }

@Injectable()
export class LaunchUseCases {
    constructor(
        private readonly operatorRepository: OperatorRepository,
        private readonly clientRepository: ClientRepository,
        private readonly currencyRepository: CurrencyRepository
    ) {}

    public async launch(launchData: LaunchData) {
        const operator = await this.operatorRepository.findByUuid(launchData.operatorUuid);
        //TODO:
        if(!operator) return;

        const client = await this.clientRepository.findByUuid(operator.clientUuid);
        //TODO:
        if(!client) return;

        const playerWallet = await loginPllayerInWallet(operator.endpointAuth, launchData.token);
        if (!playerWallet.ok) return { status: 400, message: playerWallet.msg || 'Player not found' };

        const currency = await this.currencyRepository.findByIsoCode(playerWallet.currency);
        if (!currency) return { status: 404, message: 'Currency not found' };

    }
}