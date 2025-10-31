import { Injectable } from '@nestjs/common';
import { CreateTypeToVehicleDto } from '../dto/create-type_to_vehicle.dto';
import { UpdateTypeToVehicleDto } from '../dto/update-type_to_vehicle.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TypeToVehiclesService {
  constructor(private prisma: PrismaService) {}
  async create(
    imageUrl: string,
    typeName: string,
  ): Promise<CreateTypeToVehicleDto> {
    try {
      const vehicle = await this.prisma.type_to_vehicle.create({
        data: {
          type: typeName,
          image: imageUrl,
          operative: 0,
          in_operative: 0,
        },
      });

      return {
        type: vehicle.type,
        imageUrl: vehicle.image,
        operative: vehicle.operative,
        in_operative: vehicle.in_operative,
      };
    } catch (error) {
      console.error('Error creating vehicle type:', error);
      throw error;
    }
  }

  findAll() {
    try {
      return this.prisma.type_to_vehicle.findMany();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} typeToVehicle`;
  }

  update(id: number, updateTypeToVehicleDto: UpdateTypeToVehicleDto) {
    return `This action updates a #${id} typeToVehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeToVehicle`;
  }
}
