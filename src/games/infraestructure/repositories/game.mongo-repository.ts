import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameEntity } from 'src/games/domain/game.entity';
import { GameRepository } from 'src/games/domain/game.repository';
import { GameModel } from '../models/game.model';

export class GameMongoRepository extends GameRepository {
  constructor(
    @InjectModel(GameModel.name)
    private readonly gameModel: Model<GameModel>,
  ) {
    super();
  }
  async create(data: GameEntity): Promise<GameEntity> {
    const game = await this.gameModel.create(data);
    return await game.save();
  }
  async findAll(): Promise<GameEntity[] | []> {
    return await this.gameModel.find();
  }
  async findByUuid(uuid: string): Promise<GameEntity | null> {
    return await this.gameModel.findOne({ uuid });
  }
  async update(
    uuid: string,
    dataToUpdate: Partial<GameEntity>,
  ): Promise<GameEntity | null> {
    return await this.gameModel.findOneAndUpdate({ uuid }, dataToUpdate, {
      new: true,
    });
  }
  async remove(uuid: string): Promise<GameEntity | null> {
    return await this.gameModel.findOneAndUpdate(
      { uuid },
      { status: false },
      { new: true },
    );
  }
}
