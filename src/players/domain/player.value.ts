import { OperatorEntity } from 'src/operators/domain/operator.entity';
import { PlayerEntity } from './player.entity';
import { generateUuid } from 'src/shared/helpers/generate-uuid.helper';

export class Player implements PlayerEntity {
  public id?: string;
  public username: string;
  public uuid?: string;
  public lastBalance: number;
  public status?: boolean;
  public isAdmin?: boolean;
  public tokenWallet: string;
  public WL?: string;
  public operator: OperatorEntity;
  public userId: string;
  public operatorUuid: string;

  constructor(data: PlayerEntity) {
    this.lastBalance = data.lastBalance;
    this.username = data.username;
    this.tokenWallet = data.tokenWallet;
    this.WL = data.WL;
    this.operatorUuid = data.operatorUuid;
    this.operator = data.operator;
    this.userId = data.userId;
    this.uuid = generateUuid();
    this.isAdmin = true;
    this.status = true;
  }
}
