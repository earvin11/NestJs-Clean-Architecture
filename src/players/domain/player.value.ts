import { PlayerEntity } from './player.entity';

export class Player implements PlayerEntity {
  public id?: string;
  public username: string;
  public balance: number;

  constructor(data: PlayerEntity) {
    this.balance = data.balance;
    this.username = data.username;
  }
}
