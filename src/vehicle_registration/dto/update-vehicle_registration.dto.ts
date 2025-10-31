import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleRegistrationDto } from './create-vehicle_registration.dto';

export class UpdateVehicleRegistrationDto extends PartialType(CreateVehicleRegistrationDto) {}
