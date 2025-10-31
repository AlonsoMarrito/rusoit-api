import { Module } from '@nestjs/common';
import { DamagesService } from '../service/damages.service';
import { DamagesController } from '../controller/damages.controller';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [DamagesController],
  providers: [DamagesService, PrismaService],
})
export class DamagesModule {}
