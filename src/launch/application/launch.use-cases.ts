import { ClientRepository } from 'src/clients/domain/client.repository';
import { CurrencyRepository } from 'src/currencies/domain/currency.repository';
import { GameRepository } from 'src/games/domain/game.repository';
import { OperatorRepository } from 'src/operators/domain/operator.repository';
import { PlayerRepository } from 'src/players/domain/player.repository';
import { Injectable } from 'src/shared/dependency-injection/injectable';
import { loginPllayerInWallet } from 'src/shared/helpers/requests-wallet.helpers';

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
    private readonly currencyRepository: CurrencyRepository,
    private readonly playerRepository: PlayerRepository,
    private readonly gameRepository: GameRepository,
  ) {}

  public async launch(launchData: LaunchData) {
    const operator = await this.operatorRepository.findByUuid(
      launchData.operatorUuid,
    );
    //TODO:
    if (!operator) return;

    const client = await this.clientRepository.findByUuid(operator.clientUuid);
    //TODO:
    if (!client) return;

    const playerWallet = await loginPllayerInWallet(
      operator.endpointAuth,
      launchData.token,
    );
    if (!playerWallet.ok)
      return { status: 400, message: playerWallet.msg || 'Player not found' };

    const currency = await this.currencyRepository.findByIsoCode(
      playerWallet.currency,
    );
    if (!currency) return { status: 404, message: 'Currency not found' };

    //TODO: revisar si operador contiene esta currency
    let player = await this.playerRepository.findOneBy({
      operatorUuid: launchData.operatorUuid,
      username: playerWallet.username,
    });

    if (!player) {
      player = await this.playerRepository.create({
        operatorUuid: operator.uuid,
        operator: operator,
        username: playerWallet.username,
        tokenWallet: launchData.token,
        WL: playerWallet.WL,
        userId: playerWallet.userId,
        lastBalance: +playerWallet.available_balance,
      });
    } else {
      if (!player.status) return { status: 401, message: 'Player disabled' };
      await this.playerRepository.update(player.uuid, {
        lastBalance: +playerWallet.available_balance,
        operatorUuid: operator.uuid,
        operator,
        WL: playerWallet.WL,
      });
    }

    const game = await this.gameRepository.findByUuid(launchData.casinoId);
    if (!game) return { status: 404, message: 'Game not found' };

    return {
      status: 200,
      message: 'Success',
      // minBet: game.minBet,
      // maxBet: game.maxBet,
      // casino: game.casino,
      // chips: game.chips,
      player,
      operator,
      currency,
      game,
    };
  }
}
