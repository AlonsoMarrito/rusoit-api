import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class GetBodyWorkVehicleDto {
  @ApiProperty({ example: 1, description: 'ID register' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 1, description: 'Vehicle ID' })
  @IsNumber()
  vehicle_id: number;

  @ApiProperty({ example: 1, description: 'Driver ID' })
  @IsNumber()
  driver_id: number;

  @ApiProperty({ example: 'Buena', description: 'status body work' })
  @IsString()
  motor_adicional: string;

  @ApiProperty({ example: 'Buena', description: 'status body work' })
  @IsString()
  estado_de_tablero_indicadores: string;

  @ApiProperty({ example: 'Buena', description: 'status body work' })
  @IsString()
  elevadores_de_cristales: string;

  @ApiProperty({ example: 'Buena', description: 'status body work' })
  @IsString()
  espejos_lateral_derecho: string;

  @ApiProperty({ example: 'Buena', description: 'status body work' })
  @IsString()
  espejos_lateral_izquierdo: string;

  @ApiProperty({ example: 'Buena', description: 'status body work' })
  @IsString()
  espejo_retrovisor: string;

  @ApiProperty({ example: 'Buena', description: 'status body work' })
  @IsString()
  cristal_parabrisas: string;

  @ApiProperty({ example: 'Buena', description: 'status body work' })
  @IsString()
  cristal_medallon: string;

  @ApiProperty({ example: 'Buena', description: 'status body work' })
  @IsString()
  cristal_de_puertas: string;
}
