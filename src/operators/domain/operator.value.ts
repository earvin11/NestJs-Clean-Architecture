import { generateUuid } from 'src/shared/helpers/generate-uuid.helper';
import { OperatorEntity } from './operator.entity';

export class Operator implements OperatorEntity {
  public uuid?: string;
  public name: string;
  public clientUuid: string;
  public status: boolean;
  public minBet: number;
  public maxBet: number;
  public endpointAuth: string;
  public endpointBet: string;
  public endpointWin: string;
  public endpointRollback: string;
  public casinoToken: string;
  public available: boolean;

  constructor(data: OperatorEntity) {
    this.uuid = generateUuid();
    this.name = data.name;
    this.clientUuid = data.clientUuid;
    this.status = true;
    this.minBet = data.minBet;
    this.maxBet = data.maxBet;
    this.endpointAuth = data.endpointAuth;
    this.endpointBet = data.endpointBet;
    this.endpointWin = data.endpointWin;
    this.endpointRollback = data.endpointRollback;
    this.casinoToken = data.casinoToken;
    this.available = true;
  }
}
