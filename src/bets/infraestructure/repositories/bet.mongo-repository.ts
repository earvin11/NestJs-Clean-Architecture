import { InjectModel } from '@nestjs/mongoose';
import { BetEntity } from 'src/bets/domain/bet.entity';
import { BetRepository } from 'src/bets/domain/bet.repository';
import { Bet } from '../models/bet';
import { Model } from 'mongoose';

export class BetMongoRepository extends BetRepository {
    constructor(
        @InjectModel(Bet.name)
        private readonly betModel: Model<Bet>
    ) {
        super();
    }
  async create(data: BetEntity): Promise<BetEntity> {
    const bet = await this.betModel.create(data);
    return await bet.save();
  }
  async findAll(): Promise<BetEntity[] | []> {
    return await this.betModel.find();
  }
}
