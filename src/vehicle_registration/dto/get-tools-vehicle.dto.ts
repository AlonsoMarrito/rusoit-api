import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class GetToolsVehicleDto {
  @ApiProperty({ example: 1, description: 'ID register' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 1, description: 'Vehicle ID' })
  @IsNumber()
  vehicle_id: number;

  @ApiProperty({ example: 1, description: 'Driver ID' })
  @IsNumber()
  driver_id: number;

  @ApiProperty({ example: 'Bueno', description: 'Hydraulic jack status' })
  @IsString()
  gato_hidraulico: string;

  @ApiProperty({ example: 'Malo', description: 'Wheel change tools status' })
  @IsString()
  herramientas_cambio_de_ruedas: string;

  @ApiProperty({ example: 'N/A', description: 'Horn status' })
  @IsString()
  bocina_de_sonoros: string;

  @ApiProperty({ example: 'Bueno', description: 'Sound/light module status' })
  @IsString()
  modulo_luminosos_sonoros: string;

  @ApiProperty({ example: 'Malo', description: 'Turret status' })
  @IsString()
  torreta: string;

  @ApiProperty({ example: 'Bueno', description: 'Seat belts status' })
  @IsString()
  cinturones_de_seguridad: string;

  @ApiProperty({ example: 'N/A', description: 'Wipers status' })
  @IsString()
  limpia_parabrisas: string;

  @ApiProperty({ example: 'Bueno', description: 'Insurance policy status' })
  @IsString()
  poliza_seguro: string;

  @ApiProperty({ example: 'Malo', description: 'Vehicle registration card status' })
  @IsString()
  tarjeta_circulacion: string;
}
