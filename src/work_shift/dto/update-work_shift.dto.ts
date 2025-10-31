import { PartialType } from '@nestjs/swagger';
import { CreateWorkShiftDto } from './create-work_shift.dto';

export class UpdateWorkShiftDto extends PartialType(CreateWorkShiftDto) {}
