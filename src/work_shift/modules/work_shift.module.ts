import { Module } from '@nestjs/common';
import { WorkShiftService } from '../services/work_shift.service';
import { WorkShiftController } from '../controllers/work_shift.controller';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [WorkShiftController],
  providers: [WorkShiftService, PrismaService],
})
export class WorkShiftModule {}
