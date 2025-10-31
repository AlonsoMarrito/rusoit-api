import { Injectable } from '@nestjs/common';
import { CreateDamageDto } from '../dto/create-damage.dto';
import { UpdateDamageDto } from '../dto/update-damage.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DamagesService {
  constructor(private prisma: PrismaService) {}
  create(createDamageDto: CreateDamageDto) {
    return 'This action adds a new damage';
  }

  findAllAllVehicles() {
    try {
      return this.prisma.damages.findMany();
    } catch (error) {
      console.error('Error fetching damages:', error);
      throw error;
    }
  }

  findAllAboutOneVehicle(id: number) {
    try {
      return this.prisma.damages.findMany({
        where: { vehicle_id: id },
      });
    } catch (error) {
      console.error('Error fetching damages:', error);
      throw error;
    }
  }

  findOneVehicleById(id: number) {
    try {
      return this.prisma.damages.findFirst({
        where: { id: id },
      });
    } catch (error) {
      console.error('Error fetching damages:', error);
      throw error;
    }
  }

  update(id: number, updateDamageDto: UpdateDamageDto) {
    return `This action updates a #${id} damage`;
  }

  remove(id: number) {
    return `This action removes a #${id} damage`;
  }
}
