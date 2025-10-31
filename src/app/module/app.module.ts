import { Module } from '@nestjs/common';
import { UsersModule } from '../../users/module/users.module';
import { VehicleModule } from '../../vehicle/module/vehicle.module';
import { VehicleRegistrationModule } from '../../vehicle_registration/module/vehicle_registration.module';
import { PrismaService } from '../../prisma.service';
import { DamagesModule } from '../../damages/module/damages.module';
import { TypeToVehiclesModule } from '../../type_to_vehicles/module/type_to_vehicles.module';
import { WorkShiftModule } from '../../work_shift/modules/work_shift.module';
import { AuthModule } from '../../auth/modules/auth.module';
@Module({
  imports: [
    UsersModule,
    VehicleModule,
    VehicleRegistrationModule,
    DamagesModule,
    TypeToVehiclesModule,
    WorkShiftModule,
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
