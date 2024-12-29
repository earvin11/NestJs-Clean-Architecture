import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/clients/domain/client.entity';
import { ClientRepository } from 'src/clients/domain/client.repository';
import { Client } from '../entities/client';
import { Repository } from 'typeorm';

export class ClientPgRepository extends ClientRepository {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepo: Repository<Client>,
  ) {
    super();
  }
  async create(data: ClientEntity): Promise<ClientEntity> {
    const client = this.clientRepo.create(data);
    return await this.clientRepo.save(client);
  }
}
