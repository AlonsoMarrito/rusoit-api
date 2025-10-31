import { PartialType } from '@nestjs/swagger';
import { CreateTypeToVehicleDto } from './create-type_to_vehicle.dto';

export class UpdateTypeToVehicleDto extends PartialType(CreateTypeToVehicleDto) {}
