import { ClientEntity } from './client.entity';

export abstract class ClientRepository {
  abstract create(data: ClientEntity): Promise<ClientEntity>;
  abstract findAll(): Promise<ClientEntity[] | []>;
  abstract findByUuid(uuid: string): Promise<ClientEntity | null>;
  abstract update(
    uuid: string,
    data: Partial<ClientEntity>,
  ): Promise<ClientEntity | null>;
  abstract remove(uuid: string): Promise<ClientEntity | null>;
}
