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
  async findById(id: string): Promise<PlayerEntity | null> {
    return await this.playerModel.findById(id);
  }
  delete(id: string): Promise<PlayerEntity | null> {
    throw new Error('Method not implemented.');
  }
}
