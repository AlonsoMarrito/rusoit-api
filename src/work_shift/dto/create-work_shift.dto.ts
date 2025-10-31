import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateWorkShiftDto {
  @IsString()
  name: string;

  @IsString()
  workday: string;

  @IsInt()
  time_start: number;

  @IsInt()
  working_time: number;

  @IsOptional()
  @IsInt()
  operative_personal: number | null;

  @IsOptional()
  @IsInt()
  in_operative_personal: number | null;
}
