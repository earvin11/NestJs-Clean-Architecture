import { Model } from "mongoose";
import { ClientEntity } from "src/clients/domain/client.entity";
import { ClientRepository } from "src/clients/domain/client.repository";
import { Client } from "../models/client";
import { InjectModel } from "@nestjs/mongoose";

export class ClientMongoRepository extends ClientRepository {
    constructor(
        @InjectModel(Client.name)
        private readonly clientModel: Model<Client>
    ) {
        super();
    }
    async create(data: ClientEntity): Promise<ClientEntity> {
        const client = await this.clientModel.create(data);
        return await client.save();
    }
}