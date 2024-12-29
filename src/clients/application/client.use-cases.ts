import { Injectable } from 'src/shared/dependency-injection/injectable';
import { ClientRepository } from '../domain/client.repository';
import { ClientEntity } from '../domain/client.entity';
import { Client } from '../domain/client.value';

@Injectable()
export class ClientUseCases {
  constructor(private readonly clientRepository: ClientRepository) {}

  async create(data: ClientEntity) {
    const client = new Client(data);
    return await this.clientRepository.create(client);
  }
}
