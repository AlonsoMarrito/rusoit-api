import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleRegistrationDto } from '../dto/create-vehicle_registration.dto';
import { UpdateVehicleRegistrationDto } from '../dto/update-vehicle_registration.dto';
import { GetlightVehicleDto } from '../dto/get-light-vehicle.dto';
import { GetBodyWorkVehicleDto } from '../dto/get-bodywork-vehicle.dto';
import { GetToolsVehicleDto } from '../dto/get-tools-vehicle.dto';
import { GetEngineVehicleDto } from '../dto/get-engine-vehicle.dto';
import { GetTiresVehicleDto } from '../dto/get-tires-vehicle.dto';
import { GetLiquidsVehicleDto } from '../dto/get-liquids-vehicle.dto';
import { PrismaService } from '../../prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class VehicleRegistrationService {
  constructor(private prisma: PrismaService) {}
  create(createVehicleRegistrationDto: CreateVehicleRegistrationDto) {
    return 'This action adds a new vehicleRegistration';
  }

  async findAll() {
    try {
      const vehicles = await this.prisma.vehicle_logs.findMany();
      if (vehicles.length === 0) {
        throw new Error('No vehicle registrations found');
      }
      return vehicles;
    } catch (error) {
      console.error('Error fetching vehicle registrations:', error);
      throw error;
    }
  }

  async findOneVehicleAllRecords(vehicle_id: number) {
    try {
      const vehicles = await this.prisma.vehicle_logs.findMany({
        where: { vehicle_id: vehicle_id },
      });
      if (vehicles.length === 0) {
        throw new Error('No vehicle registrations found');
      }
      return vehicles;
    } catch (error) {
      console.error('Error fetching vehicle registration:', error);
      throw error;
    }
  }

  async findGroupLight(vehicle_id: number): Promise<GetlightVehicleDto[]> {
    const select = Object.keys(new GetlightVehicleDto()).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );
    const vehiclesRaw = await this.prisma.vehicle_logs.findMany({
      where: { vehicle_id },
      orderBy: { id: 'desc' },
      take: 1,
      select,
    });
    if (vehiclesRaw.length === 0) {
      throw new NotFoundException(
        `No vehicle registrations found for vehicle_id ${vehicle_id}`,
      );
    }
    return plainToInstance(GetlightVehicleDto, vehiclesRaw);
  }

  async findGroupBodywork(
    vehicle_id: number,
  ): Promise<GetBodyWorkVehicleDto[]> {
    const select = Object.keys(new GetBodyWorkVehicleDto()).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );
    const vehiclesRaw = await this.prisma.vehicle_logs.findMany({
      where: { vehicle_id },
      orderBy: { id: 'desc' },
      take: 1,
      select,
    });
    if (vehiclesRaw.length === 0) {
      throw new NotFoundException(
        `No vehicle registrations found for vehicle_id ${vehicle_id}`,
      );
    }
    return plainToInstance(GetBodyWorkVehicleDto, vehiclesRaw);
  }

  async findGroupTools(vehicle_id: number): Promise<GetToolsVehicleDto[]> {
    const select = Object.keys(new GetToolsVehicleDto()).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );
    const vehiclesRaw = await this.prisma.vehicle_logs.findMany({
      where: { vehicle_id },
      orderBy: { id: 'desc' },
      take: 1,
      select,
    });
    if (vehiclesRaw.length === 0) {
      throw new NotFoundException(
        `No vehicle registrations found for vehicle_id ${vehicle_id}`,
      );
    }
    return plainToInstance(GetToolsVehicleDto, vehiclesRaw);
  }

  async findGroupLiquids(vehicle_id: number): Promise<GetLiquidsVehicleDto[]> {
    const select = Object.keys(new GetLiquidsVehicleDto()).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );
    const vehiclesRaw = await this.prisma.vehicle_logs.findMany({
      where: { vehicle_id },
      orderBy: { id: 'desc' },
      take: 1,
      select,
    });
    if (vehiclesRaw.length === 0) {
      throw new NotFoundException(
        `No vehicle registrations found for vehicle_id ${vehicle_id}`,
      );
    }
    return plainToInstance(GetLiquidsVehicleDto, vehiclesRaw);
  }

  async findGroupTires(vehicle_id: number): Promise<GetTiresVehicleDto[]> {
    const select = Object.keys(new GetTiresVehicleDto()).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );
    const vehiclesRaw = await this.prisma.vehicle_logs.findMany({
      where: { vehicle_id },
      orderBy: { id: 'desc' },
      take: 1,
      select,
    });
    if (vehiclesRaw.length === 0) {
      throw new NotFoundException(
        `No vehicle registrations found for vehicle_id ${vehicle_id}`,
      );
    }
    return plainToInstance(GetTiresVehicleDto, vehiclesRaw);
  }

  async findGroupEngine(vehicle_id: number): Promise<GetEngineVehicleDto[]> {
    const select = Object.keys(new GetEngineVehicleDto()).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );
    const vehiclesRaw = await this.prisma.vehicle_logs.findMany({
      where: { vehicle_id },
      orderBy: { id: 'desc' },
      take: 1,
      select,
    });
    if (vehiclesRaw.length === 0) {
      throw new NotFoundException(
        `No vehicle registrations found for vehicle_id ${vehicle_id}`,
      );
    }
    return plainToInstance(GetEngineVehicleDto, vehiclesRaw);
  }

  update(id: number, updateVehicleRegistrationDto: UpdateVehicleRegistrationDto) {
    return `This action updates a #${id} vehicleRegistration`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleRegistration`;
  }
}
