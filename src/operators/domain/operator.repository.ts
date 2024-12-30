import { OperatorEntity } from './operator.entity';

export abstract class OperatorRepository {
  abstract create(data: OperatorEntity): Promise<OperatorEntity>;
  abstract findAll(): Promise<OperatorEntity[] | []>;
  abstract findByUuid(uuid: string): Promise<OperatorEntity | null>;
  abstract update(
    uuid: string,
    data: Partial<OperatorEntity>,
  ): Promise<OperatorEntity | null>;
  abstract remove(uuid: string): Promise<OperatorEntity | null>;
}
