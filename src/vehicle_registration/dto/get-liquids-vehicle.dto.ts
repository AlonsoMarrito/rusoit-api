import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class GetLiquidsVehicleDto {
  @ApiProperty({ example: 1, description: 'ID register' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 1, description: 'Vehicle ID' })
  @IsNumber()
  vehicle_id: number;

  @ApiProperty({ example: 1, description: 'Driver ID' })
  @IsNumber()
  driver_id: number;

  @ApiProperty({ example: 'Bueno', description: 'Fuel tank cap condition' })
  @IsString()
  tapon_tanque_combustible: string;

  @ApiProperty({ example: 'Malo', description: 'Oil cap condition' })
  @IsString()
  tapon_aceite: string;

  @ApiProperty({ example: 'N/A', description: 'Water cap condition' })
  @IsString()
  tapon_agua: string;

  @ApiProperty({ example: 'Bueno', description: 'Engine oil level' })
  @IsString()
  nivel_aceite_motor: string;

  @ApiProperty({ example: 'Malo', description: 'Transmission oil level' })
  @IsString()
  nivel_aceite_transmision: string;

  @ApiProperty({ example: 'N/A', description: 'Radiator water level' })
  @IsString()
  nivel_agua_radiador: string;

  @ApiProperty({ example: 'Bueno', description: 'Brake fluid level' })
  @IsString()
  nivel_liquido_frenos: string;
}
