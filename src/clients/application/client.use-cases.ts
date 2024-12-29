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
  async findAll() {
    return await this.clientRepository.findAll();
  }
  async findByUuid(uuid: string) {
    return await this.clientRepository.findByUuid(uuid);
  }
  async update(uuid: string, data: Partial<ClientEntity>) {
    return await this.clientRepository.update(uuid, data);
  }
  async remove(uuid: string) {
    return await this.clientRepository.remove(uuid);
  }
}
