import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class GetEngineVehicleDto {
  @ApiProperty({ example: 1, description: 'ID register' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 1, description: 'Vehicle ID' })
  @IsNumber()
  vehicle_id: number;

  @ApiProperty({ example: 1, description: 'Driver ID' })
  @IsNumber()
  driver_id: number;

  @ApiProperty({ example: 'Bueno', description: 'Ignition keys status' })
  @IsString()
  llaves_encendido: string;

  @ApiProperty({ example: 'Malo', description: 'Ignition switch status' })
  @IsString()
  switch_encendido: string;

  @ApiProperty({ example: 'Bueno', description: 'Battery status' })
  @IsString()
  bateria: string;

  @ApiProperty({ example: 'N/A', description: 'Battery posts and terminals status' })
  @IsString()
  postes_terminales_bateria: string;
}
