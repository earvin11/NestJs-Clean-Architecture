import { ClientEntity } from './client.entity';

export abstract class ClientRepository {
  abstract create(data: ClientEntity): Promise<ClientEntity>;
}
