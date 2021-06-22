import { Controller,
    Post,
    Get,
    HttpStatus,
    Body,
    BadRequestException,
    HttpCode,
    Param,
    Put,
    Delete, } from '@nestjs/common';
import { CreateClientDTO } from './dto/client.dto';
import { Client } from './schemas/client.schema';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async getClients(): Promise<Client[]> {
        const clients = await this.clientService.getAll();

        return clients;
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getClient(@Param() params): Promise<Client> {
        const client = await this.clientService.getOne(params.id);

        return client;
    }

    @Get(':name')
    @HttpCode(HttpStatus.OK)
    async getClientByName(@Param() params): Promise<Client> {
        const client = await this.clientService.getOne(params.name);

        return client;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createClient(@Body() createClientDTO: CreateClientDTO): Promise<Client> {
        let client = await this.clientService.createOne(createClientDTO).catch((error) => {
            throw new BadRequestException(error, 'No se ha podido crear el cliente');
        });

        return client;
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateClient(@Param() params, @Body() createClientDTO: CreateClientDTO): Promise<Client> {
        const updatedClient = await this.clientService.updateOne(params.id, createClientDTO);

        return updatedClient;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteClient(@Param() params): Promise<void> {
        await this.clientService.deleteOne(params.id);
    }
}
