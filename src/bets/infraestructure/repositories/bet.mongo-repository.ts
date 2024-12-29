import { InjectModel } from '@nestjs/mongoose';
import { BetEntity } from 'src/bets/domain/bet.entity';
import { BetRepository } from 'src/bets/domain/bet.repository';
import { BetModel } from '../models/bet.model';
import { Model } from 'mongoose';

export class BetMongoRepository extends BetRepository {
  constructor(
    @InjectModel(BetModel.name)
    private readonly betModel: Model<BetModel>,
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
