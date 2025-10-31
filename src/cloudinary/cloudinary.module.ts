import { Module } from '@nestjs/common';
import { TypeToVehiclesController } from '../type_to_vehicles/controller/type_to_vehicles.controller';

@Module({
  controllers: [TypeToVehiclesController],
})
export class TypeToVehiclesModule {}
