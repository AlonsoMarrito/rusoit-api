import { Injectable } from '@nestjs/common';
import { CreateWorkShiftDto } from '../dto/create-work_shift.dto';
import { UpdateWorkShiftDto } from '../dto/update-work_shift.dto';
import { PrismaService } from '../../prisma.service';
import { work_shift } from 'generated/prisma';

@Injectable()
export class WorkShiftService {
  constructor(private prisma: PrismaService) {}
  async create(createWorkShiftDto: CreateWorkShiftDto): Promise<work_shift> {
    try {
      if (!createWorkShiftDto) {
        throw new Error('Invalid work shift data');
      }
      const createNewShift = {
        ...createWorkShiftDto,
        in_operative_personal: 0,
        operative_personal: 0,
      };

      const newShift = await this.prisma.work_shift.create({
        data: createNewShift,
      });
      return newShift;
    } catch (error) {
      console.error('Error creating work shift:', error);
      throw error;
    }
  }

  async findAll(): Promise<work_shift[]> {
    try {
      const workShifts = await this.prisma.work_shift.findMany();
      if (!workShifts) {
        throw new Error('No work shifts found');
      }
      return workShifts;
    } catch (error) {
      console.error('Error fetching work shifts:', error);
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} workShift`;
  }

  update(id: number, updateWorkShiftDto: UpdateWorkShiftDto) {
    return `This action updates a #${id} workShift`;
  }

  remove(id: number) {
    try {
      return this.prisma.work_shift.delete({
        where: { id: id },
      });
    } catch (error) {
      console.error('Error deleting work shift:', error);
      throw error;
    }
  }
}
