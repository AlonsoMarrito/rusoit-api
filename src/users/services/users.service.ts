import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    try {
      return this.prisma.users.findMany();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  findAllByShift(shift: string) {
    try {
      return this.prisma.users.findMany({
        where: { work_shift: shift.toUpperCase() },
      });
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  findOne(id: number) {
    try {
      return this.prisma.users.findMany({
        where: { id: id },
      });
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async findOneByEmployeeNumber(employeeNumber: string) {
    try {
      return this.prisma.users.findUnique({
        where: { employee_number: employeeNumber },
      });
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
