import { generateUuid } from 'src/shared/helpers/generate-uuid.helper';
import { GameEntity } from './game.entity';

export class Game implements GameEntity {
  public uuid: string;
  public name: string;
  public raceDuration: string;
  public status: boolean;

  constructor(data: GameEntity) {
    this.name = data.name;
    this.raceDuration = data.raceDuration;
    this.uuid = generateUuid();
    this.status = true;
  }
}
