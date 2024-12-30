import { InjectModel } from '@nestjs/mongoose';
import { OperatorEntity } from 'src/operators/domain/operator.entity';
import { OperatorRepository } from 'src/operators/domain/operator.repository';
import { OperatorModel } from '../models/operator.model';
import { Model } from 'mongoose';

export class OperatorMongoRepository extends OperatorRepository {
  constructor(
    @InjectModel(OperatorModel.name)
    private readonly operatorModel: Model<OperatorModel>,
  ) {
    super();
  }
  async create(data: OperatorEntity): Promise<OperatorEntity> {
    const operator = await this.operatorModel.create(data);
    return await operator.save();
  }
  async findAll(): Promise<OperatorEntity[] | []> {
    return await this.operatorModel.find();
  }
  async findByUuid(uuid: string): Promise<OperatorEntity | null> {
    return await this.operatorModel.findOne({ uuid });
  }
  async update(
    uuid: string,
    data: Partial<OperatorEntity>,
  ): Promise<OperatorEntity | null> {
    return await this.operatorModel.findOneAndUpdate({ uuid }, data);
  }
  async remove(uuid: string): Promise<OperatorEntity | null> {
    return await this.operatorModel.findOneAndDelete({ uuid });
  }
}
