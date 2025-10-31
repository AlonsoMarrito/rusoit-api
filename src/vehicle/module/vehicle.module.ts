import { Module } from '@nestjs/common';
import { VehicleService } from '../services/vehicle.service';
import { VehicleController } from '../controllers/vehicle.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService, PrismaService],
})
export class VehicleModule {}
