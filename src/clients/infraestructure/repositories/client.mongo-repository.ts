import { Model } from 'mongoose';
import { ClientEntity } from 'src/clients/domain/client.entity';
import { ClientRepository } from 'src/clients/domain/client.repository';
import { ClientModel } from '../models/client.model';
import { InjectModel } from '@nestjs/mongoose';

export class ClientMongoRepository extends ClientRepository {
  constructor(
    @InjectModel(ClientModel.name)
    private readonly clientModel: Model<ClientModel>,
  ) {
    super();
  }
  async create(data: ClientEntity): Promise<ClientEntity> {
    const client = await this.clientModel.create(data);
    return await client.save();
  }
  async findAll(): Promise<ClientEntity[] | []> {
    return await this.clientModel.find();
  }
  async findByUuid(uuid: string): Promise<ClientEntity | null> {
    return await this.clientModel.findOne({ uuid });
  }
  async update(
    uuid: string,
    data: Partial<ClientEntity>,
  ): Promise<ClientEntity | null> {
    return await this.clientModel.findOneAndUpdate({ uuid }, data, {
      new: true,
    });
  }
  async remove(uuid: string): Promise<ClientEntity | null> {
    return await this.clientModel.findOneAndUpdate(
      { uuid },
      { status: false },
      { new: true },
    );
  }
}
