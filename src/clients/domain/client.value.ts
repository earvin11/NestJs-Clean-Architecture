import { generateUuid } from 'src/shared/helpers/generate-uuid.helper';
import { ClientEntity } from './client.entity';

export class Client implements ClientEntity {
  public name: string;
  public uuid?: string;
  public endpointAuth: string;
  public endpointRollback: string;
  public endpointBet: string;
  public endpointWin: string;
  public logo?: string;
  public loaderLogo?: string;
  public status?: boolean;
  public available?: boolean;
  public useLogo?: boolean;

  constructor(data: ClientEntity) {
    this.name = data.name;
    this.available = true;
    this.endpointAuth = data.endpointAuth;
    this.endpointBet = data.endpointBet;
    this.endpointRollback = data.endpointRollback;
    this.endpointWin = data.endpointWin;
    this.loaderLogo = data.loaderLogo;
    this.logo = data.logo;
    this.status = true;
    this.useLogo = data.useLogo;
    this.uuid = generateUuid();
  }
  
}
