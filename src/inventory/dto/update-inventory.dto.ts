import { IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryDTO } from './create-inventory.dto';

export class UpdateInventoryDTO extends PartialType(CreateInventoryDTO) {}
