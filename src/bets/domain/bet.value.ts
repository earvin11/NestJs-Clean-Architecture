import { generateUuid } from 'src/shared/helpers/generate-uuid.helper';
import { BetEntity } from './bet.entity';

export class Bet implements BetEntity {
  public uuid: string;
  public bet: Record<string, any>;
  public playerUuid: string;
  public totalAmount: number;
  public currencyUuid: string;
  public gameUuid: string;
  public isPaid: boolean;

  constructor(data: BetEntity) {
    this.bet = data.bet;
    this.currencyUuid = data.currencyUuid;
    this.gameUuid = data.gameUuid;
    (this.isPaid = false), (this.playerUuid = data.playerUuid);
    this.totalAmount = data.totalAmount;
    this.uuid = generateUuid();
  }
}
