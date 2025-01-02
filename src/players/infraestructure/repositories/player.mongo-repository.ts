import { InjectModel } from '@nestjs/mongoose';
import { PlayerEntity } from 'src/players/domain/player.entity';
import { PlayerRepository } from 'src/players/domain/player.repository';
import { Player } from '../models/player';
import { Model } from 'mongoose';

export class PlayerMongoRepository extends PlayerRepository {
  constructor(
    @InjectModel(Player.name)
    private readonly playerModel: Model<Player>,
  ) {
    super();
  }

  async create(data: PlayerEntity): Promise<PlayerEntity> {
    const player = await this.playerModel.create(data);
    return await player.save();
  }
  findAll(): Promise<PlayerEntity[] | []> {
    return this.playerModel.find().exec();
  }
  async findByUuid(uuid: string): Promise<PlayerEntity | null> {
    return await this.playerModel.findOne({ uuid });
  }
  async findOneBy(filter: Record<string, any>): Promise<PlayerEntity | null> {
    return await this.playerModel.findOne(filter);
  }
  async update(
    uuid: string,
    dataToUpdate: Partial<PlayerEntity>,
  ): Promise<PlayerEntity | null> {
    const data = await this.playerModel.findOneAndUpdate(
      { uuid },
      { ...dataToUpdate },
    );
    return data;
  }
  async delete(uuid: string): Promise<PlayerEntity | null> {
    return await this.playerModel.findOneAndUpdate({ uuid }, { status: false });
  }
}
