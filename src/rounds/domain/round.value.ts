import { generateUuid } from 'src/shared/helpers/generate-uuid.helper';
import { RoundEntity } from './round.entity';

export class Round implements RoundEntity {
  public uuid?: string;
  public gameUuid: string;
  public roundNumber: number;
  public status?: boolean;
  public open?: boolean;

  constructor(data: RoundEntity) {
    this.gameUuid = data.gameUuid;
    this.roundNumber = data.roundNumber;
    this.status = true;
    this.uuid = generateUuid();
    this.open = true;
  }
}
