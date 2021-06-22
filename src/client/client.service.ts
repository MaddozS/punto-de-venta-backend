import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument, ClientSchema } from './schemas/client.schema';
import { CreateClientDTO } from './dto/client.dto';
import { Service } from 'src/types/Service';

@Injectable()
export class ClientService implements Service<Client, CreateClientDTO> {
    constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>) {}

    async getAll(){
        const clients = await this.clientModel.find();

        return clients;
    }

    async getOne(clientID: string) {
        const client = await this.clientModel.findById(clientID);

        return client;
    }

    async getOneByName(clientName: string) {
        const client = await this.clientModel.findById(clientName);

        return client;
    }

    async createOne(createClientDTO: CreateClientDTO) {
        const createdProduct = new this.clientModel(createClientDTO);
    
        return createdProduct.save();
    }
    
    async updateOne(clientID: string, createClientDTO: CreateClientDTO) {
        const updatedClient = await this.clientModel.findByIdAndUpdate(clientID, createClientDTO , {
          new: true,
        });
    
        return updatedClient;
    }
    
    async deleteOne(clientID: string) {
        const deletedClient = await this.clientModel.findByIdAndDelete(clientID);
    
        return deletedClient;
      }
}
