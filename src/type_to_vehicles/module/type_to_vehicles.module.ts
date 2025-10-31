import { Module } from '@nestjs/common';
import { TypeToVehiclesService } from '../service/type_to_vehicles.service';
import { TypeToVehiclesController } from '../controller/type_to_vehicles.controller';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [TypeToVehiclesController],
  providers: [TypeToVehiclesService, PrismaService],
})
export class TypeToVehiclesModule {}
