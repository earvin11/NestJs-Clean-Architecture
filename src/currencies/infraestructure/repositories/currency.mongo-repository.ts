import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CurrencyEntity } from 'src/currencies/domain/currency.entity';
import { CurrencyRepository } from 'src/currencies/domain/currency.repository';
import { CurrencyModel } from '../models/currency.model';

export class CurrencyMongoRepository extends CurrencyRepository {
  constructor(
    @InjectModel(CurrencyModel.name)
    private readonly currencyModel: Model<CurrencyModel>,
  ) {
    super();
  }
  async create(data: CurrencyEntity): Promise<CurrencyEntity> {
    const currency = await this.currencyModel.create(data);
    return await currency.save();
  }
  async findAll(): Promise<CurrencyEntity[] | []> {
    return await this.currencyModel.find();
  }
  async findByUuid(uuid: string): Promise<CurrencyEntity | null> {
    return await this.currencyModel.findOne({ uuid });
  }
  async findByIsoCode(isoCode: string): Promise<CurrencyEntity | null> {
    return await this.currencyModel.findOne({ isoCode });
  }
  async update(
    uuid: string,
    data: Partial<CurrencyEntity>,
  ): Promise<CurrencyEntity | null> {
    return await this.currencyModel.findOneAndUpdate({ uuid }, data, {
      new: true,
    });
  }
  async remove(uuid: string): Promise<CurrencyEntity | null> {
    return await this.currencyModel.findOneAndUpdate(
      { uuid },
      { status: false },
      { new: true },
    );
  }
}
