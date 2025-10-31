import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from '../dto/create-vehicle.dto';
import { UpdateVehicleDto } from '../dto/update-vehicle.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class VehicleService {
  constructor(private prisma: PrismaService) {}

  async create(createVehicleDto: CreateVehicleDto) {
    try {
      return await this.prisma.vehicles.create({
        data: createVehicleDto,
      });
    } catch (error) {
      console.error('Error creando vehículo:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.vehicles.findMany();
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      throw error;
    }
  }

  async findOne(numberVehicle: number) {
    try {
      return await this.prisma.vehicles.findFirst({
        where: { number_unit: numberVehicle },
      });
    } catch (error) {
      console.error('Error fetching vehicle:', error);
      throw error;
    }
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto) {
    try {
      return await this.prisma.vehicles.update({
        where: { number_unit: id },
        data: updateVehicleDto,
      });
    } catch (error) {
      console.error('Error updating vehicle:', error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.vehicles.delete({
        where: { number_unit: id },
      });
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      throw error;
    }
  }
}
