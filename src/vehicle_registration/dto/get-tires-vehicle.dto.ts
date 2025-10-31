import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class GetTiresVehicleDto {
  @ApiProperty({ example: 1, description: 'ID register' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 1, description: 'Vehicle ID' })
  @IsNumber()
  vehicle_id: number;

  @ApiProperty({ example: 1, description: 'Driver ID' })
  @IsNumber()
  driver_id: number;

  @ApiProperty({ example: 'Bueno', description: 'Front right tire condition' })
  @IsString()
  llanta_delantera_derecha: string;

  @ApiProperty({ example: 'Malo', description: 'Front left tire condition' })
  @IsString()
  llanta_delantera_izquierda: string;

  @ApiProperty({ example: 'N/A', description: 'Rear right tire condition' })
  @IsString()
  llanta_trasera_derecha: string;

  @ApiProperty({ example: 'Bueno', description: 'Rear left tire condition' })
  @IsString()
  llanta_trasera_izquierda: string;

  @ApiProperty({ example: 'Malo', description: 'Spare tire condition' })
  @IsString()
  llanta_repuesto: string;
}
