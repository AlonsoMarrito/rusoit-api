import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class GetlightVehicleDto {
  @ApiProperty({ example: 1, description: 'ID register' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 1, description: 'Vehicle ID' })
  @IsNumber()
  vehicle_id: number;

  @ApiProperty({ example: 1, description: 'Driver ID' })
  @IsNumber()
  driver_id: number;

  @ApiProperty({ example: 'Good', description: 'status light' })
  @IsString()
  luz_delantera_alta: string;

  @ApiProperty({ example: 'Good', description: 'status light' })
  @IsString()
  luz_delantera_baja: string;

  @ApiProperty({ example: 'Good', description: 'status light and operativility' })
  @IsString()
  luces_de_emergencia: string;

  @ApiProperty({ example: 'Good', description: 'status light' })
  @IsString()
  luces_neblineros: string;

  @ApiProperty({ example: 'Good', description: 'status light' })
  @IsString()
  luz_direccional: string;

  @ApiProperty({ example: 'Good', description: 'status light' })
  @IsString()
  luz_de_freno: string;

  @ApiProperty({ example: 'Good', description: 'status light' })
  @IsString()
  luz_de_reversa: string;

  @ApiProperty({ example: 'Good', description: 'status light' })
  @IsString()
  luces_del_tanque_cisterna: string;

  @ApiProperty({ example: 'Good', description: 'status light' })
  @IsString()
  luces_interior_cabina: string;
}
