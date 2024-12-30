import { Model } from 'mongoose';
import { RoundEntity } from 'src/rounds/domain/round.entity';
import { RoundRepository } from 'src/rounds/domain/round.repository';
import { RoundModel } from '../models/round.model';
import { InjectModel } from '@nestjs/mongoose';

export class RoundMongoRepository extends RoundRepository {
  constructor(
    @InjectModel(RoundModel.name)
    private readonly roundModel: Model<RoundModel>,
  ) {
    super();
  }
  async create(data: RoundEntity): Promise<RoundEntity> {
    const round = await this.roundModel.create(data);
    return await round.save();
  }
  async findAll(): Promise<RoundEntity[] | []> {
    return await this.roundModel.find();
  }
  async findByUuid(uuid: string): Promise<RoundEntity | null> {
    return await this.roundModel.findOne({ uuid });
  }
  async update(
    uuid: string,
    dataToUpdate: Partial<RoundEntity>,
  ): Promise<RoundEntity | null> {
    return await this.roundModel.findOneAndUpdate({ uuid }, dataToUpdate, { new: true });
  }
  async remove(uuid: string): Promise<RoundEntity | null> {
    return await this.roundModel.findOneAndUpdate({ uuid }, { status: false }, { new: true });
  }
}