import { Module } from '@nestjs/common';
import { VehicleRegistrationService } from '../service/vehicle_registration.service';
import { VehicleRegistrationController } from '../controller/vehicle_registration.controller';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [VehicleRegistrationController],
  providers: [VehicleRegistrationService, PrismaService],
})
export class VehicleRegistrationModule {}
